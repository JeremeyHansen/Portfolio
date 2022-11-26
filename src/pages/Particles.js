import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback, useMemo } from "react"

const ParticlesComponent = () => {
    const options = useMemo(()=> {
        return{
            particles: {
                color: {
                  value: "#65ff91",
                  animation: {
                    enable: true,
                    speed: 5
                  }
                },
                move: {
                  attract: {
                    enable: false,
                    distance: 100,
                    rotate: {
                      x: 100,
                      y: 2000
                    }
                  },
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "destroy"
                  },
                  path: {
                    clamp: false,
                    enable: true,
                    delay: {
                      value: 0
                    },
                    generator: "polygonPathGenerator",
                    options: {
                      sides: 6,
                      turnSteps: 30,
                      angle: 30
                    }
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                  trail: {
                    fillColor: "#050521",
                    length: 40,
                    enable: true
                  }
                },
                number: {
                  density: {
                    enable: true,
                    area: 300
                  },
                  value: 0
                },
                opacity: {
                  value: 1
                },
                shape: {
                  type: "circle"
                },
                size: {
                  value: 1
                }
              },
              background: {
                color: "#0b073f"
              },
              fullScreen: {
                zIndex: -1
              },
              emitters: {
                direction: "none",
                rate: {
                  quantity: 1,
                  delay: 0.25
                },
                size: {
                  width: 0,
                  height: 0
                },
                position: {
                  x: 50,
                  y: 50
                }
              }
            }
}, [])

    const particlesInit = useCallback((engine)=> {
        loadFull(engine)
    }, [])

    return <Particles init={particlesInit} options={options} />
}

export default ParticlesComponent