async function mapServerLoad() {
    const __map__ = await global__Config("./_map_.json");
    // console.log(__map__)

    function extractAnimationClass(str) {
        const regex = /\.(\w+)\s*=>\s*\[\s*([\w\s-]+)\s*\]\s*/;
        const match = str.match(regex);

        if (match) {
            const className = match[1];
            const animationClass = match[2];

            return {
                _class: `.${className}`,
                _animation: animationClass,
            };
        }

        return null;
    }


    const modules_preload = {
        animation: () => {

            // Animações Map
            const animacaoes = __map__._animacoes;
            // console.log(animacaoes)
            const { _recursivo_vizualizacao, _map } = animacaoes;

            const animations = _map.map(extractAnimationClass);

            function aplicarClassAnimadas() {
                animations.forEach(animation => {
                    if (animation) {
                        const elements = document.querySelectorAll(animation._class);
                        elements.forEach(element => {
                            // Remove as classes de animação existentes
                            element.className = element.className.replace(/\banimate__\S+/g, '').trim();

                            // Utiliza requestAnimationFrame para garantir que a animação seja reaplicada
                            requestAnimationFrame(() => {
                                // Adiciona novamente as classes de animação
                                animation._animation.split(" ").forEach(cls => {
                                    if (cls.trim()) {
                                        element.classList.add(cls.trim());
                                    }
                                });

                            });
                        });
                    }
                });
            }

            // Chama a função aplicarClassAnimadas inicialmente
            aplicarClassAnimadas();

            if (_recursivo_vizualizacao) {

                // console.log(animations)

                // animations.forEach((_animacoes_configuracoes , index) => {
                //     // console.log(_animacoes_configuracoes)

                //     const { _class , _animation  } = _animacoes_configuracoes;

                    
                //     bitlockerTemplate();
                // })

                bitlockerTemplate(animations)

                
            }

        },
        init() {
            this.animation()
        },
        _map() {
            this.init()
        }
    }

    modules_preload._map();


}

mapServerLoad();