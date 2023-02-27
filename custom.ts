//% emitAsConstant
const enum SeedType {
    //% block="wheat"
    WHEAT = 296,
    //% block="beetroot"
    BEETROOT = 462,
    //% block="carrot"
    CARROT = 391,
    //% block="potato"
    POTATO = 392,
    //% block="pumpkin"
    PUMPKIN_STEM = 104,
    //% block="melon"
    MELON_STEM = 105
}
enum Stage {
    //% block="0"
    ZERO = 0,
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

const BlockName:number[] = [
    2, 0, 1, 65537, 131073, 196609, 262145, 327681, 393217,
    3, 65539, 4, 5, 65541, 131077, 196613, 262149, 327685, 6, 65542, 131078, 196614, 262150, 327686, 7, 8, 10,
    12, 65548, 13, 14, 15, 16, 17, 65553, 131089, 196625, 18, 65554, 131090, 196626, 19, 65555, 20, 21, 22, 196631, 24,
    65560, 131096, 25, 26, 27, 28, 29, 30, 65567,
    131103, 32, 65569, 35, 65571, 131107, 196643, 262179, 327715, 393251, 458787, 524323, 589859, 655395, 720931, 786467, 852003, 917539,
    983075, 37, 38, 65574, 131110, 196646, 262182, 327718, 393254,
    458790, 524326, 674, 589862, 655398, 39, 40, 41, 42, 43, 44, 65580, 196652, 262188, 327724, 393260, 458796, 45, 46, 47, 48,
    49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 63, 65, 66, 67, 69, 70, 72, 73, 76, 327757, 78, 79, 80, 81, 82, 83, 84, 85,
    65621, 131157, 196693, 262229, 327765, 86, 87, 88, 89, 91, 92, 93, 96, 97, 65633, 131169, 196705, 262241,
    327777, 98, 65634, 131170, 196706, 99, 917603, 983139, 917604, 101, 102, 103,
    104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
    120, 121, 122, 123, 196733, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 138, 139,
    65675, 140, 141, 142, 327823, 144, 145, 65681, 131217,
    146, 147, 148, 149, 151, 152, 153, 154, 155, 65691, 131227, 156, 157, 158, 65694, 131230, 196766, 262302,
    327838, 159, 65695, 131231, 196767, 262303, 327839, 393375, 458911,
    524447, 589983, 655519, 721055, 786591, 852127, 917663, 983199, 160,
    65696, 131232, 196768, 262304, 327840, 393376, 458912, 524448, 589984,
    655520, 721056, 786592, 852128, 917664, 983200, 161, 65697, 162, 65698, 163,
    164, 165, 167, 168, 65704, 131240, 169, 170, 171, 65707, 131243, 196779,
    262315, 327851, 393387, 458923, 524459, 589995, 655531, 721067, 786603, 852139,
    917675, 983211, 172, 173, 174, 175, 65711, 131247, 196783, 262319, 327855, 179, 65715, 131251, 180,
    181, 182, 65718, 131254, 196790, 262326, 183, 184, 185, 186, 187, 198, 199, 200, 201, 131273, 203, 1048781, 206,
    208, 213, 214, 215, 216, 218, 65754, 131290, 196826, 262362, 327898, 393434, 458970, 524506, 590042, 655578, 721114,
    786650, 852186, 917722, 983258, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 231, 232, 233, 234,
    235, 236, 65772, 131308, 196844, 262380, 327916, 393452, 458988,
    524524, 590060, 655596, 721132, 786668, 852204, 917740, 983276, 237, 65773,
    131309, 196845, 262381, 327917, 458989, 524525, 590061, 655597, 721133, 786669, 852205, 917741, 983277, 240, 241,
    65777, 131313, 196849, 262385, 327921, 393457, 458993, 524529, 590065, 655601, 721137, 786673, 852209,
    917745, 983281, 243, 244, 251, 252, 513, 514, 515, 516, 517, 518, 519, 520, 521, 676, 522, 641, 642, 66178, 131714,
    197250, 262786, 643, 66179, 131715, 197251, 262787, 328323, 393859, 459395, 721539, 787075, 644, 66180, 131716, 197252, 262788, 645,
    66181, 131717, 197253, 262789, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663,
    664, 665, 666, 667, 711, 712, 707, 708, 709, 713, 714, 715, 717, 720, 724, 729, 730, 731, 732, 738, 739, 740, 741, 742, 743, 744,
    745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768,
    769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789
].sort()


//% emitAsConstant
enum HydrationType {
    //% block="Not_hydrated"
    NOT_HYDRATED = 0,

    //% block="Hydrated"
    HYDRATED = 1
}
//% color=190 weight=100 icon=
namespace Harvest {
    /**
        * Plant development stage detection.
    */
    //% blockId=TestSeedStageOnPosition
    //% block="Test $typeSeed stage $stage on %pos=minecraftCreatePosition"
    export function SeedTest(typeSeed: SeedType, stage: Stage, pos: Position): boolean {
        player.say(typeSeed)
        if (blocks.testForBlock(blocks.blockWithData(blocks.blockById(typeSeed), stage), pos)) {
            return true
        } else {
            return false
        }
    }
    //% blockId=TestStageOnPosition
    //% block="Test stage on %pos=minecraftCreatePosition"
   export function StageTest(pos: Position): number {
        let result:number
        let blockInPosition = blocks.BlockTestOnPosition(pos)
        for (let x = 0; x < 10; x++) {
            if (blocks.testForBlock(blocks.blockWithData(blockInPosition, x), pos)) {
                result=x
            } 
        }

        return result
    }

    //% blockId=ChangeFarmlandHydration
    //% block="Change to $hydration Farmland on %pos=minecraftCreatePosition"
    //do poprawy za długo sie robi inny test 
    export function ChangeHydration(hydration:HydrationType,pos: Position): void {
        let blockInPosition = blocks.BlockTestOnPosition(pos)
        if(blockInPosition==60||blockInPosition==458812){
            if (hydration==HydrationType.HYDRATED) {
                blocks.place(blocks.blockWithData(FARMLAND, 7), pos)
            } else {
                blocks.place(blocks.blockWithData(FARMLAND, 0), pos)
            }
        }else{
            player.say("Its not Farmland")
        }
    }
      //% blockId=TestHydrationFarmland
    //% block="Get Hydration on %pos=minecraftCreatePosition"
    export function TestHydration(pos: Position): number {
        if (blocks.testForBlock(blocks.blockWithData(FARMLAND, 0), pos)) {
            return blocks.blockById(60)
        } else if (blocks.testForBlock(blocks.blockWithData(FARMLAND, 7), pos)) {
            return blocks.blockById(458812)
        } else {
            player.say("Its not farmland")
            return null
        }
    }
}
let FindBlock: number
namespace blocks {
    /**
        * Detects what object is placed in a given position
    */
    //% blockId=FindBlockOnPosition
    //% block="Find block on %pos=minecraftCreatePosition"
    export function BlockTestOnPosition(pos: Position): number {
        FindBlock = BlockName.find(x => blocks.testForBlock(x, pos) == true)
        return FindBlock
    }

}
