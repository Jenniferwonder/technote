<script lang="ts">
    import { onMount } from 'svelte'
    // import { url } from '@utils/url-utils.ts'
    import { i18n } from '@i18n/translation'
    import I18nKey from '@i18n/i18nKey'
    let keywordDesktop = ''
    let keywordMobile = ''
    let result = []
    // const fakeResult = [{
    //     url: '/technote',
    //     meta: {
    //         title: 'This Is a Fake Search Result'
    //     },
    //     excerpt: 'Because the search cannot work in the <mark>dev</mark> environment.'
    // }, {
    //     url: '/technote',
    //     meta: {
    //         title: 'If You Want to Test the Search'
    //     },
    //     excerpt: 'Try running <mark>npm build && npm preview</mark> instead.'
    // }]

    let search = (keyword: string, isDesktop: boolean) => {}

    onMount(() => {
        search = async (keyword: string, isDesktop: boolean) => {
            const panel = document.getElementById('search-panel')
            if (!panel)
                return

            if (!keyword && isDesktop) {
                panel.classList.add("float-panel-closed")
                return
            }

            let arr = [];
            // if (import.meta.env.PROD) {
                const ret = await pagefind.search(keyword)
                for (const item of ret.results) {
                    arr.push(await item.data())
                }
            // } else {
            //     // Mock data for non-production environment
            //     arr = JSON.parse('[{"url":"/","content":"Simple Guides for 瞻思笔记. Cover image source: Source. This blog template is built with Astro. For the things that are not mentioned in this guide, you may find the answers in the Astro Docs. Front-matter of Posts. --- title: My First Blog Post DateStarted: 2023-09-09 description: This is the first post of my new Astro blog. image: ./cover.jpg tags: [Foo, Bar] category: Front-end draft: false ---AttributeDescription title. The title of the post. DateStarted. The date the post was DateStarted. description. A short description of the post. Displayed on index page. image. The cover image path of the post. 1. Start with http:// or https://: Use web image 2. Start with /: For image in public dir 3. With none of the prefixes: Relative to the markdown file. tags. The tags of the post. category. The category of the post. draft. If this post is still a draft, which won’t be displayed. Where to Place the Post Files. Your post files should be placed in src/content/posts/ directory. You can also create sub-directories to better organize your posts and assets. src/content/posts/ ├── post-1.md └── post-2/ ├── cover.png └── index.md.","word_count":187,"filters":{},"meta":{"title":"This Is a Fake Search Result"},"anchors":[{"element":"h2","id":"front-matter-of-posts","text":"Front-matter of Posts","location":34},{"element":"h2","id":"where-to-place-the-post-files","text":"Where to Place the Post Files","location":151}],"weighted_locations":[{"weight":10,"balanced_score":57600,"location":3}],"locations":[3],"raw_content":"Simple Guides for 瞻思笔记. Cover image source: Source. This blog template is built with Astro. For the things that are not mentioned in this guide, you may find the answers in the Astro Docs. Front-matter of Posts. --- title: My First Blog Post DateStarted: 2023-09-09 description: This is the first post of my new Astro blog. image: ./cover.jpg tags: [Foo, Bar] category: Front-end draft: false ---AttributeDescription title. The title of the post. DateStarted. The date the post was DateStarted. description. A short description of the post. Displayed on index page. image. The cover image path of the post. 1. Start with http:// or https://: Use web image 2. Start with /: For image in public dir 3. With none of the prefixes: Relative to the markdown file. tags. The tags of the post. category. The category of the post. draft. If this post is still a draft, which won’t be displayed. Where to Place the Post Files. Your post files should be placed in src/content/posts/ directory. You can also create sub-directories to better organize your posts and assets. src/content/posts/ ├── post-1.md └── post-2/ ├── cover.png └── index.md.","raw_url":"/posts/guide/","excerpt":"Because the search cannot work in the <mark>dev</mark> environment.","sub_results":[{"title":"Simple Guides for 瞻思笔记 - 瞻思笔记","url":"/posts/guide/","weighted_locations":[{"weight":10,"balanced_score":57600,"location":3}],"locations":[3],"excerpt":"Simple Guides for <mark>瞻思笔记.</mark> Cover image source: Source. This blog template is built with Astro. For the things that are not mentioned in this guide, you may find the answers"}]},{"url":"/","content":"About. This is the demo site for 瞻思笔记. Sources of images used in this site. Unsplash. 星と少女 by Stella. Rabbit - v1.4 Showcase by Rabbit_YourMajesty.","word_count":25,"filters":{},"meta":{"title":"If You Want to Test the Search"},"anchors":[{"element":"h1","id":"about","text":"About","location":0},{"element":"h3","id":"sources-of-images-used-in-this-site","text":"Sources of images used in this site","location":8}],"weighted_locations":[{"weight":1,"balanced_score":576,"location":7}],"locations":[7],"raw_content":"About. This is the demo site for 瞻思笔记. Sources of images used in this site. Unsplash. 星と少女 by Stella. Rabbit - v1.4 Showcase by Rabbit_YourMajesty.","raw_url":"/about/","excerpt":"Try running <mark>npm build && npm preview</mark> instead.","sub_results":[{"title":"About","url":"/about/#about","anchor":{"element":"h1","id":"about","text":"About","location":0},"weighted_locations":[{"weight":1,"balanced_score":576,"location":7}],"locations":[7],"excerpt":"About. This is the demo site for <mark>瞻思笔记.</mark>"}]}]')
            //     arr = fakeResult
            // }

            if (!arr.length && isDesktop) {
                panel.classList.add("float-panel-closed")
                return
            }

            if (isDesktop) {
                panel.classList.remove("float-panel-closed")
            }
            result = arr.slice(0,8)
            localStorage.removeItem("curIndex");
        }
    })

    const togglePanel = () => {
        const panel = document.getElementById('search-panel')
        panel?.classList.toggle("float-panel-closed")
    }
    const closePanel = () => {
        const panel = document.getElementById('search-panel')
        panel?.classList.add("float-panel-closed")
    }
    const handleKeydown = (e) => {
        const panel = document.getElementById('search-panel')
        const results = document.querySelectorAll('.result')
        const searchBar = document.getElementById('search-bar-input')
        // panel?.classList.add("float-panel-closed")
        let curIndex = localStorage.getItem("curIndex")?Number(localStorage.getItem("curIndex")):-1;
        if (e.key === 'ArrowDown') {
            console.log("down",curIndex)
            curIndex<results.length-1?curIndex++:curIndex=results.length-1;
            localStorage.setItem("curIndex", String(curIndex));
            results[curIndex].focus();
        }
        else if (e.key === 'ArrowUp') {
            console.log("up",curIndex)
            curIndex>0?curIndex--:curIndex=0;
            localStorage.setItem("curIndex", String(curIndex));
            results[curIndex].focus();
        }
        else if (e.key === 'Escape') {
            panel?.classList.add("float-panel-closed")
        } 
        else if (e.ctrlKey && e.key === 'z') {
            console.log("search bar focus")
            searchBar?.focus();
        }
    };

    $: search(keywordDesktop, true)
    $: search(keywordMobile, false)
</script>

<svelte:window on:keydown={handleKeydown}/>

<!-- search bar for desktop view -->
<div id="search-bar" class="hidden lg:flex transition-all items-center h-11 mr-2 rounded-lg
    bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
    dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10
">
    <slot name="search-icon"></slot>
    <input id="search-bar-input" placeholder="Ctrl Z  {i18n(I18nKey.search)}" bind:value={keywordDesktop} on:focus={() => search(keywordDesktop, true)}
           class="transition-all pl-10 text-sm bg-transparent outline-0
         h-full w-40 active:w-60 focus:w-60 text-black/50 dark:text-white/50"
    >
</div>

<!-- toggle btn for phone/tablet view -->
<button on:click={togglePanel} aria-label="Search Panel" id="search-switch"
        class="btn-plain lg:hidden rounded-lg w-11 h-11 active:scale-90">
    <slot name="search-switch"></slot>
</button>

<!-- search panel -->
<div id="search-panel" on:click={closePanel}  class="float-panel float-panel-closed search-panel absolute md:w-[30rem]
top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-2">

    <!-- search bar inside panel for phone/tablet -->
    <div id="search-bar-inside" class="flex relative lg:hidden transition-all items-center h-11 rounded-xl
      bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
      dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10
  ">
        <slot name="search-icon"></slot>
        <input placeholder="Search" bind:value={keywordMobile}
               class="pl-10 absolute inset-0 text-sm bg-transparent outline-0
               focus:w-60 text-black/50 dark:text-white/50"
        >
    </div>

    <!-- search results -->
    {#each result as item}
        <a href={item.url}
           tabindex="0"
           class="result transition first-of-type:mt-2 lg:first-of-type:mt-0 group block
       rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]">
            <div class="transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]">
                {item.meta.title}<slot name="arrow-icon"></slot>
            </div>
            <div class="transition text-sm text-50">
                {@html item.excerpt}
            </div>
        </a>
    {/each}
</div>
