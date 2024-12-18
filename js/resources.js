var resources = [

    /* Graphics.
     * @example
     * { name: "example", type:"image", src: "data/img/example.png" },
     */
    { name: "tileset",         type:"image",   src: "data/img/tileset.png" },
    { name: "newset",         type:"image",   src: "data/img/newset.png" },
    { name: "Tileset2",         type:"image",   src: "data/img/Tileset2.png" },

    { name: "background",      type:"image",   src: "data/img/background.png" },
    { name: "background1",      type:"image",   src: "data/img/background1.png" },
    { name: "background2",      type:"image",   src: "data/img/background2.png" },
    { name: "background3",      type:"image",   src: "data/img/background3.png" },

    { name: "clouds",          type:"image",   src: "data/img/clouds.png" },

    /* Maps.
     * @example
     * { name: "example01", type: "tmx", src: "data/map/example01.tmx" },
     * { name: "example01", type: "tmx", src: "data/map/example01.json" },
     */
    { name: "map1",            type: "tmx",    src: "data/map/map1.tmx" },
    { name: "map2",            type: "tmx",    src: "data/map/map2.tmx" },
    { name: "map3",            type: "tmx",    src: "data/map/map3.tmx"},


    /* Tilesets.
     * @example
     * { name: "example01", type: "tsx", src: "data/map/example01.tsx" },
     * { name: "example01", type: "tsx", src: "data/map/example01.json" },
     */
    { name: "tileset",         type: "tsx",    src: "data/map/tileset.json" },
    { name: "newset",         type: "tsx",    src: "data/map/newset.json" },
    { name: "TileSet2Imagen",         type: "tsx",    src: "data/map/TileSet2Imagen.json" },



    /* Background music.
     * @example
     * { name: "example_bgm", type: "audio", src: "data/bgm/" },
     */
    /*{ name: "dst-gameforest",  type: "audio", src: "data/bgm/" },*/
    { name: "LyriaPiano",  type: "audio", src: "data/bgm/" },


    /* Sound effects.
     * @example
     * { name: "example_sfx", type: "audio", src: "data/sfx/" }
     */
    { name: "cling",           type: "audio",  src: "data/sfx/" },
    { name: "die",             type: "audio",  src: "data/sfx/" },
    { name: "enemykill",       type: "audio",  src: "data/sfx/" },
    { name: "jump",            type: "audio",  src: "data/sfx/" },


    /* Atlases
     * @example
     * { name: "example_tps", type: "json", src: "data/img/example_tps.json" },
     */
    // texturePacker
    { name: "texture",         type: "json",   src: "data/img/texture.json" },
    { name: "texture",         type: "image",  src: "data/img/texture.png" },
    { name: "character",       type:"json",    src: "data/img/character.json" },
    { name: "character",       type:"image",   src: "data/img/character.png" },



    /* Bitmap Font
    * @example
    * { name: "example_fnt", type: "image", src: "data/img/example_fnt.png" },
    * { name: "example_fnt", type: "binary", src: "data/img/example_fnt.fnt" },
    */
    { name: "PressStart2P", type:"image", src: "data/fnt/PressStart2P.png" },
    { name: "PressStart2P", type:"binary", src: "data/fnt/PressStart2P.fnt"}
];

export default resources;
