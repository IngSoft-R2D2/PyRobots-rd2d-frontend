import Board from "./Board.js"
import { useState, useEffect } from 'react';


const Animation = (props) => {
    const json = props.json
    // const json1 = simulation_json; 
    // const json = {
    //   "simulation_json": {
    //     "round_0": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           403
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           737
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 5
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           254
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           886
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 5
    //       }
    //     },
    //     "round_1": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           453
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           787
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 5
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           304
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           936
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 5
    //       }
    //     },
    //     "round_2": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           503
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           837
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 5
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           354
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           986
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 7
    //       }
    //     },
    //     "round_3": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           553
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           887
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 5
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           404
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 9
    //       }
    //     },
    //     "round_4": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           603
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           937
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 5
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           454
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 11
    //       }
    //     },
    //     "round_5": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           653
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           987
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 7
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           504
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 13
    //       }
    //     },
    //     "round_6": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           703
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 9
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           554
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 15
    //       }
    //     },
    //     "round_7": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           753
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 11
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           604
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 17
    //       }
    //     },
    //     "round_8": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           803
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 13
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           654
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 19
    //       }
    //     },
    //     "round_9": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           853
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 15
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           704
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 21
    //       }
    //     },
    //     "round_10": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           903
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 0
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 17
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           754
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 23
    //       }
    //     },
    //     "round_11": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           953
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 2
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 19
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           804
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 25
    //       }
    //     },
    //     "round_12": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 4
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 21
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           854
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 27
    //       }
    //     },
    //     "round_13": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 6
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 23
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           904
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 0
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 29
    //       }
    //     },
    //     "round_14": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 8
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 25
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           954
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 2
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 31
    //       }
    //     },
    //     "round_15": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 10
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 27
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 4
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 33
    //       }
    //     },
    //     "round_16": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 12
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 29
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 6
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 35
    //       }
    //     },
    //     "round_17": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 14
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 31
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 8
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 37
    //       }
    //     },
    //     "round_18": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 16
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 33
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 10
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 39
    //       }
    //     },
    //     "round_19": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 18
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 35
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 12
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 41
    //       }
    //     },
    //     "round_20": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 20
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 37
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 14
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 43
    //       }
    //     },
    //     "round_21": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 22
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 39
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 16
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 45
    //       }
    //     },
    //     "round_22": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 24
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 41
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 18
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 47
    //       }
    //     },
    //     "round_23": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 26
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 43
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 20
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 49
    //       }
    //     },
    //     "round_24": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 28
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 45
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 22
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 51
    //       }
    //     },
    //     "round_25": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 30
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 47
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 24
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 53
    //       }
    //     },
    //     "round_26": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 32
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 49
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 26
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 55
    //       }
    //     },
    //     "round_27": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 34
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 51
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 28
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 57
    //       }
    //     },
    //     "round_28": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 36
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 53
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 30
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 59
    //       }
    //     },
    //     "round_29": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 38
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 55
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 32
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 61
    //       }
    //     },
    //     "round_30": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 40
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 57
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 34
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 63
    //       }
    //     },
    //     "round_31": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 42
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 59
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 36
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 65
    //       }
    //     },
    //     "round_32": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 44
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 61
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 38
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 67
    //       }
    //     },
    //     "round_33": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 46
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 63
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 40
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 69
    //       }
    //     },
    //     "round_34": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 48
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 65
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 42
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 71
    //       }
    //     },
    //     "round_35": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 50
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 67
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 44
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 73
    //       }
    //     },
    //     "round_36": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 52
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 69
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 46
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 75
    //       }
    //     },
    //     "round_37": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 54
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 71
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 48
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 77
    //       }
    //     },
    //     "round_38": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 56
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 73
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 50
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 79
    //       }
    //     },
    //     "round_39": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 58
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 75
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 52
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 81
    //       }
    //     },
    //     "round_40": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 60
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 77
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 54
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 83
    //       }
    //     },
    //     "round_41": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 62
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 79
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 56
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 85
    //       }
    //     },
    //     "round_42": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 64
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 81
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 58
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 87
    //       }
    //     },
    //     "round_43": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 66
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 83
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 60
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 89
    //       }
    //     },
    //     "round_44": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 68
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 85
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 62
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 91
    //       }
    //     },
    //     "round_45": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 70
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 87
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 64
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 93
    //       }
    //     },
    //     "round_46": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 72
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 89
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 66
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 95
    //       }
    //     },
    //     "round_47": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 74
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 91
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 68
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 97
    //       }
    //     },
    //     "round_48": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 76
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 93
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 70
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 99
    //       }
    //     },
    //     "round_49": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 78
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 95
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 72
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_50": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 80
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 97
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 74
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_51": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 82
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 99
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 76
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_52": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 84
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 100
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 78
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_53": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 86
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 100
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 80
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_54": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 88
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 100
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 82
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_55": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 90
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 100
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 84
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_56": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 92
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 100
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 86
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_57": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 94
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 100
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 88
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_58": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 96
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 100
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 90
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_59": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 98
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 100
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 92
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     },
    //     "round_60": {
    //       "R1_Megatron": {
    //         "position": [
    //           797,
    //           999
    //         ],
    //         "missile": [
    //           447,
    //           403
    //         ],
    //         "damage": 100
    //       },
    //       "R2_Megatron": {
    //         "position": [
    //           14,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           737
    //         ],
    //         "damage": 100
    //       },
    //       "R3_Megatron": {
    //         "position": [
    //           164,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           254
    //         ],
    //         "damage": 94
    //       },
    //       "R4_Megatron": {
    //         "position": [
    //           5,
    //           999
    //         ],
    //         "missile": [
    //           0,
    //           886
    //         ],
    //         "damage": 100
    //       }
    //     }
    //   },
    //   "operation_result": "Simulation successfully runned."
    // }    
    const obj = Object.values(json["simulation_json"]); 
    const [index, setIndex] = useState(0); //frame 

    // useEffect(() => {
    //   intervalRef.current = getInterval()
    //   return () => clearInterval(intervalRef.current);
    // });

    // const getInterval = () => {
    //   const progressInterval = setInterval(() => {
    //     if (index<obj.length-1){
    //       setIndex ((index) => index + 1);
    //     } 
    //   }, 500);
    //   console.log(obj.length);
    //   console.log(index); 
    //   return progressInterval; 
    // }

    const animation = () => {
      if (index<obj.length-1){
          setIndex ((index) => index + 1);
        }  
    }

    useEffect(() => {
      const interval = setInterval(animation,50);
      return () => clearInterval(interval); 
    })
    // console.log(obj[1])
    // return renderFrame(frame)
    return(
    <Board round = {obj[index]}/>)
    // por alguna extrania razon del universo esto funciona!!!! :D 
}

export default Animation; 

