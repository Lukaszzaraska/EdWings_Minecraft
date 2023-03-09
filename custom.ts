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
const SeedTypeArray :number[]=[
    296,
    462,
    391,
    392,
    105
]
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

const BlockName: number[] = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    10,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    32,
    35,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    63,
    65,
    66,
    67,
    69,
    70,
    72,
    73,
    76,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    91,
    92,
    93,
    96,
    97,
    98,
    99,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    120,
    121,
    122,
    123,
    126,
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    138,
    139,
    140,
    141,
    142,
    144,
    145,
    146,
    147,
    148,
    149,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    167,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    198,
    199,
    200,
    201,
    203,
    206,
    208,
    213,
    214,
    215,
    216,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    240,
    241,
    243,
    244,
    251,
    252,
    513,
    514,
    515,
    516,
    517,
    518,
    519,
    520,
    521,
    522,
    641,
    642,
    643,
    644,
    645,
    649,
    650,
    651,
    652,
    653,
    654,
    655,
    656,
    657,
    658,
    659,
    660,
    661,
    662,
    663,
    664,
    665,
    666,
    667,
    674,
    676,
    707,
    708,
    709,
    711,
    712,
    713,
    714,
    715,
    717,
    720,
    724,
    729,
    730,
    731,
    732,
    738,
    739,
    740,
    741,
    742,
    743,
    744,
    745,
    746,
    747,
    748,
    749,
    750,
    751,
    752,
    753,
    754,
    755,
    756,
    757,
    758,
    759,
    760,
    761,
    762,
    763,
    764,
    765,
    766,
    767,
    768,
    769,
    770,
    771,
    772,
    773,
    774,
    775,
    776,
    777,
    778,
    779,
    780,
    781,
    782,
    783,
    784,
    785,
    786,
    787,
    788,
    789,
    65537,
    65539,
    65541,
    65542,
    65548,
    65553,
    65554,
    65555,
    65560,
    65567,
    65569,
    65571,
    65574,
    65580,
    65621,
    65633,
    65634,
    65675,
    65681,
    65691,
    65694,
    65695,
    65696,
    65697,
    65698,
    65704,
    65707,
    65711,
    65715,
    65718,
    65754,
    65772,
    65773,
    65777,
    66178,
    66179,
    66180,
    66181,
    131073,
    131077,
    131078,
    131089,
    131090,
    131096,
    131103,
    131107,
    131110,
    131157,
    131169,
    131170,
    131217,
    131227,
    131230,
    131231,
    131232,
    131240,
    131243,
    131247,
    131251,
    131254,
    131273,
    131290,
    131308,
    131309,
    131313,
    131714,
    131715,
    131716,
    131717,
    196609,
    196613,
    196614,
    196625,
    196626,
    196631,
    196643,
    196646,
    196652,
    196693,
    196705,
    196706,
    196733,
    196766,
    196767,
    196768,
    196779,
    196783,
    196790,
    196826,
    196844,
    196845,
    196849,
    197250,
    197251,
    197252,
    197253,
    262145,
    262149,
    262150,
    262179,
    262182,
    262188,
    262229,
    262241,
    262302,
    262303,
    262304,
    262315,
    262319,
    262326,
    262362,
    262380,
    262381,
    262385,
    262786,
    262787,
    262788,
    262789,
    327681,
    327685,
    327686,
    327715,
    327718,
    327724,
    327757,
    327765,
    327777,
    327823,
    327838,
    327839,
    327840,
    327851,
    327855,
    327898,
    327916,
    327917,
    327921,
    328323,
    393217,
    393251,
    393254,
    393260,
    393375,
    393376,
    393387,
    393434,
    393452,
    393457,
    393859,
    458787,
    458790,
    458796,
    458911,
    458912,
    458923,
    458970,
    458988,
    458989,
    458993,
    459395,
    524323,
    524326,
    524447,
    524448,
    524459,
    524506,
    524524,
    524525,
    524529,
    589859,
    589862,
    589983,
    589984,
    589995,
    590042,
    590060,
    590061,
    590065,
    655395,
    655398,
    655519,
    655520,
    655531,
    655578,
    655596,
    655597,
    655601,
    720931,
    721055,
    721056,
    721067,
    721114,
    721132,
    721133,
    721137,
    721539,
    786467,
    786591,
    786592,
    786603,
    786650,
    786668,
    786669,
    786673,
    787075,
    852003,
    852127,
    852128,
    852139,
    852186,
    852204,
    852205,
    852209,
    917539,
    917603,
    917604,
    917663,
    917664,
    917675,
    917722,
    917740,
    917741,
    917745,
    983075,
    983139,
    983199,
    983200,
    983211,
    983258,
    983276,
    983277,
    983281,
    1048781
]


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
    //% block="Test Seeds stage on %pos=minecraftCreatePosition"
    export function StageTest(pos: Position): number {
        let result: number
        let blockInPosition = blocks.SeedsTestOnPositionAsync(pos)
        for (let x = 0; x < 8; x++) {
            if (blocks.testForBlock(blocks.blockWithData(blockInPosition, x), pos)) {
                result = x
            }
        }

        return result
    }

    //% blockId=ChangeFarmlandHydration
    //% block="Change to $hydration Farmland on %pos=minecraftCreatePosition"
    //do poprawy za długo sie robi inny test 
    export function ChangeHydration(hydration: HydrationType, pos: Position): void {
        let blockInPosition = blocks.BlockTestOnPositionAsync(pos)
        if (blockInPosition == 60 || blockInPosition == 458812) {
            if (hydration == HydrationType.HYDRATED) {
                blocks.place(blocks.blockWithData(FARMLAND, 7), pos)
            } else {
                blocks.place(blocks.blockWithData(FARMLAND, 0), pos)
            }
        } else {
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

namespace blocks {
    /**
        * Detects what object is placed in a given position
    */
    //% promise
    //% blockId=FindBlockOnPosition
    //% block="Find block on %pos=minecraftCreatePosition"
    export function BlockTestOnPositionAsync(pos: Position): number {
        return BlockName.find(x => blocks.testForBlock(x, pos) == true)
    }

    //% promise
    //% blockId=FindBlockOnPosition
    export function SeedsTestOnPositionAsync(pos: Position): number {
        return SeedTypeArray.find(x => blocks.testForBlock(x, pos) == true)
    }
    //% blockId=TestDataValueOnPosition
    //% block="Test Data-Value on %pos=minecraftCreatePosition"
    export function DataValueTest(pos: Position): number {
        let result: number
        let blockInPosition = blocks.BlockTestOnPositionAsync(pos)
        for (let x = 0; x < 15; x++) {
            if (blocks.testForBlock(blocks.blockWithData(blockInPosition, x), pos)) {
                result = x
            }
        }

        return result
    }
    //% blockId=TestDataValueBlockOnPosition
    //% block="Test Data-Value $block on %pos=minecraftCreatePosition"
    //% block.shadow=minecraftBlock
    export function DataValueBlockTest(block:Block,pos: Position): number {
        let result: number
        let blockInPosition = block
        for (let x = 0; x < 15; x++) {
            if (blocks.testForBlock(blocks.blockWithData(blockInPosition, x), pos)) {
                result = x
            }
        }

        return result
    }
}
