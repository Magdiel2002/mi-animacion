const config = {
    width: 150,
    Height: 200,
    parent: `container`,
    pixelArt: true,
    scene: {
        preload,
        create
    }
}

new Phaser.Game(config);

function preload(){
    console.log("preload");
    this.load.atlas(`tomato_atlas`, `./assets/evil_tomato.png`, `./assets/evil_tomato.json`);
    this.load.json(`evil_tomato_anim`, `./assets/evil_tomato_anim.json`)
}
function create(){
    console.log("create");
    this.tomato = this.add.sprite(100, 100, `tomato_atlas`).setScale(3);
    this.dataAnim = this.cache.json.get(`evil_tomato_anim`);


    this.anims.fromJSON(this.dataAnim)
    /*
    this.anims.create({
        key: `tomato_walk`,
        frames: this.anims.generateFrameNames(`evil_tomato`, {
            prefix: `evil_tomato_`,
            suffix: `.png`,
            start: 1,
            end: 8
        }),
        frameRate: 10,
        repeat: -1
    });
    */

    this.tomato.anims.play(`tomato_atlas_walk`);

}