export default {
    base: '/garden',
    title: 'brain.overment.com',
    description: 'Everything I know',
    head: [],
    themeConfig: {
        logo: '/assets/img/logo-symbol.svg',
        sidebar: [
            {
                text: 'Start',
                items: [
                    { text: 'Start here', link: '/' }
                ]
            },
            {
                text: 'Core',
                items: [
                    { text: 'Direction', link: '/Core/Direction.md' },
                    { text: 'Learning System', link: '/Core/Learning System.md' },
                    { text: 'Process', link: '/Core/Process.md' },
                    { text: 'Knowing thyself', link: '/Core/Knowing thyself.md' },
                    { text: 'Values', link: '/Core/Values.md' },
                ]
            },
        ]
    }
}
