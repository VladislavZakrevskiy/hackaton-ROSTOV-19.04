//@ts-nocheck
export const startAntAlg = (vertexes: number[][], paintPath: (path: number[][], color: string) => void) => {
    const numberOfGenerations = 100000
    const alpha = 1
    // const size = 600
    const beta = 1
    let pheromones: number[][]
    let distance
    // const desires = []
    const Q = 200
    const evaporation = 0.64

    const distanceBetweenTwoPoints = (first: number[], second: number[]) => {
        return Math.sqrt(Math.pow(first[0] - second[0], 2) + Math.pow(first[1] - second[1], 2))
    }

    const allDistanceForPath = (path_idx: number[]) => {
        let dist = 0
        for (let i = 0; i < path_idx.length - 1; ++i) {
            dist += distanceBetweenTwoPoints(vertexes[path_idx[i]].slice(), vertexes[path_idx[i + 1]].slice())
        }
        dist += distanceBetweenTwoPoints(vertexes[path_idx[path_idx.length - 1]].slice(), vertexes[path_idx[0]].slice())
        return dist
    }

    const antAlgorithm = () => {
        const vertexesLength = vertexes.length
        let bestAnt: [number[][], number[], number][] = [] // [[vertexes], [idx_vertexes], length of path]

        const b = [...vertexes]

        const qwe: number[] = []
        for (let i = 0; i < vertexes.length; ++i) {
            qwe.push(i)
        }

        // @ts-ignore
        bestAnt = [b, qwe, allDistanceForPath(qwe)]

        pheromones = []
        distance = []

        for (let i = 0; i < vertexesLength; ++i) {
            pheromones[i] = new Array(vertexesLength) as number[]
            distance[i] = new Array(vertexesLength)
        }

        for (let i = 0; i < vertexes.length - 1; ++i) {
            for (let j = i + 1; j < vertexes.length; ++j) {
                distance[i][j] = Q / distanceBetweenTwoPoints(vertexes[i].slice(), vertexes[j].slice())
                pheromones[i][j] = 0.2
            }
        }

        let end = vertexesLength * 2

        for (let generation = 0; generation < numberOfGenerations; ++generation) {
            if (end === 0) {
                // TODO Функция рисует конечный правильный маршрут
                paintPath(bestAnt[0] as number[][], 'rgb(142,250,142)')
                // drawFinishPath(bestAnt[0], 'rgb(142,250,142)')
                break
            }

            const ways: number[] = []
            let path: number[][] = []
            let path_idx: number[] = []

            for (let ant = 0; ant < vertexes.length; ++ant) {
                path = []
                path_idx = []

                let startVertex_idx = ant
                let startVertex = vertexes[startVertex_idx].slice()

                path.push(startVertex)
                path_idx.push(startVertex_idx)

                while (path.length !== vertexes.length) {
                    let sumOfDesires = 0

                    let p = []
                    for (let j = 0; j < vertexes.length; ++j) {
                        if (path_idx.indexOf(j) !== -1) {
                            continue
                        }
                        const min = Math.min(startVertex_idx, j)
                        const max = Math.max(startVertex_idx, j)
                        const desire = Math.pow(pheromones[min][max], alpha) * Math.pow(distance[min][max], beta)
                        p.push([j, desire])
                        sumOfDesires += desire
                    }

                    for (let i = 0; i < p.length; ++i) {
                        p[i][1] /= sumOfDesires
                    }

                    for (let j = 1; j < p.length; ++j) {
                        p[j][1] += p[j - 1][1]
                    }

                    const rand = Math.random()
                    let choice
                    for (let i = 0; i < p.length; ++i) {
                        if (rand < p[i][1]) {
                            choice = p[i][0]
                            break
                        }
                    }
                    // @ts-ignore
                    startVertex_idx = choice

                    startVertex = vertexes[startVertex_idx].slice()
                    path.push(startVertex.slice())
                    path_idx.push(startVertex_idx)
                }
                // @ts-ignore
                ways.push([path.slice(), path_idx.slice(), allDistanceForPath(path_idx)])
            }

            ways.sort(function (a, b) {
                // @ts-ignore
                return a[2] - b[2]
            })

            for (let i = 0; i < vertexesLength - 1; ++i) {
                for (let j = i + 1; j < vertexesLength; ++j) {
                    pheromones[i][j] *= evaporation
                }
            }

            for (let i = 0; i < ways.length; ++i) {
                // @ts-ignore
                const idx_path = ways[i][1].slice()
                // @ts-ignore
                const lenOfPath = ways[i][2]
                for (let j = 0; j < vertexesLength - 1; ++j) {
                    const min = Math.min(idx_path[j], idx_path[j + 1])
                    const max = Math.max(idx_path[j], idx_path[j + 1])
                    pheromones[min][max] += Q / lenOfPath
                }
            }

            // @ts-ignore
            const newBestAnt = [...ways[0]]

            if (newBestAnt[2] < bestAnt[2]) {
                // drawTheLines(bestAnt[0], newBestAnt[0])
                bestAnt = newBestAnt.slice()
                // TODO Нарисовать точки (если они есть вообще)
                end = vertexesLength * 2
            }

            end -= 1
        }
    }

    return antAlgorithm
}
