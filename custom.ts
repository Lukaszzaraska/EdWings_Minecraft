
// const wheatT = Item.Wheat
// enum SeedType{
// //% block = "Wheat"
// WHEAT
// }
enum SeedType {
    //% block="Wheat"
    Wheat,
    //% block="Bert"
    Bert
}
enum Stage {
    //% block = "0"
    ZERO=0,
    //% block = "1"
    ONE,
    //% block = "2"
    TWO,
    //% block = "3"
    THREE,
    //% block = "4"
    FOUR,
    //% block = "5"
    FIVE,
    //% block = "6"
    SIX,
    //% block = "7"
    SEVEN
}
//% color=190 weight=100 
namespace Harvest{

    //% block = "Test  %pos=minecraftCreatePosition"
    export function SeedStageTest(typeSeed:SeedType,stage:Stage,pos:Position): boolean {
        if (blocks.testForBlock(blocks.blockWithData(typeSeed, stage), pos)) {
            return true
        }else{
            return false
        }
        }
}
