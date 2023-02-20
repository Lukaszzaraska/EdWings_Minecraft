
enum SeedType {
    //% block="wheat"
    Wheat,
    //% block="beetroot"
    Beetroot,
    //% block="carrot"
    Carrot,
    //% block="potato"
    Potato
}
enum Stage {
    //% block="0"
    ZERO=0,
    //% block="1"
    ONE,
    //% block="2"
    TWO,
    //% block="3"
    THREE,
    //% block="4"
    FOUR,
    //% block="5"
    FIVE,
    //% block="6"
    SIX,
    //% block="7"
    SEVEN
}
//% color=190 weight=100 
namespace Harvest{

    //% block="Test $typeSeed stage $stage on %pos=minecraftCreatePosition"
    export function SeedTest(typeSeed:SeedType,stage:Stage,pos:Position): boolean {
        if (blocks.testForBlock(blocks.blockWithData(typeSeed, stage), pos)) {
            return true
        }else{
            return false
        }
        }
}
