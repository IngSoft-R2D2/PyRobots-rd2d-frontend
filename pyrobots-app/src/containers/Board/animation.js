import Board from "./Board.js"
import { useState, useEffect, useRef } from 'react';


const Animation = (simulation_json) => {

    const json = {"simulation_json":{"round_1":{"R1":{"damage":0,"position":[300,500],"missile":[450,500]},"R2":{"damage":0,"position":[100,990],"missile":[300,500]},"R3":{"damage":0,"position":[276,893],"missile":[328,582]},"R4":{"damage":0,"position":[832,923],"missile":[302,623]}},"round_2":{"R1":{"damage":30,"position":[349,567],"missile":[456,523]},"R2":{"damage":8,"position":[189,923],"missile":[256,736]},"R3":{"damage":0,"position":[375,789],"missile":[423,824]},"R4":{"damage":0,"position":[782,903],"missile":[812,989]}},"round_3":{"R1":{"damage":33,"position":[298,599],"missile":[423,550]},"R2":{"damage":26,"position":[50,989],"missile":[305,489]},"R3":{"damage":16,"position":[256,878],"missile":[300,500]},"R4":{"damage":5,"position":[817,878],"missile":[278,623]}},"round_4":{"R1":{"damage":93,"position":[322,480],"missile":[450,500]},"R2":{"damage":48,"position":[189,999],"missile":[500,473]},"R3":{"damage":22,"position":[312,872],"missile":[289,645]},"R4":{"damage":20,"position":[777,956],"missile":[482,734]}},"round_5":{"R2":{"damage":58,"position":[232,902],"missile":[689,599]},"R3":{"damage":33,"position":[345,900],"missile":[467,745]},"R4":{"damage":28,"position":[789,723],"missile":[323,897]}},"round_6":{"R2":{"damage":60,"position":[245,972],"missile":[989,399]},"R3":{"damage":40,"position":[345,900],"missile":[467,745]},"R4":{"damage":30,"position":[789,723],"missile":[323,897]}},"round_7":{"R2":{"damage":75,"position":[308,952],"missile":[723,498]},"R3":{"damage":50,"position":[333,922],"missile":[582,865]},"R4":{"damage":35,"position":[800,700],"missile":[300,912]}},"round_8":{"R3":{"damage":56,"position":[356,944],"missile":[629,999]},"R4":{"damage":45,"position":[832,712],"missile":[343,923]}},"round_9":{"R3":{"damage":98,"position":[367,956],"missile":[429,599]},"R4":{"damage":50,"position":[832,712],"missile":[343,923]}},"round_10":{"R4":{"damage":60,"position":[832,712]}}},"operation_result":"Simulation successfully runned."}    
    
    const obj = Object.values(json["simulation_json"]); 
    const [index, setIndex] = useState(0); //frame 
    const intervalRef = useRef();

    useEffect(() => {
      intervalRef.current = getInterval()
      return () => clearInterval(intervalRef.current);
    });

    const getInterval = () => {
      const progressInterval = setInterval(() => {
        setIndex ((index) => index + 1); 
      }, 500);
      return progressInterval; 
    }

    const animation = () => {
      setIndex(index + 1); 
    }

    useEffect(() => {
      const interval = setInterval(animation,20);
      return () => clearInterval(interval); 
    })
    // console.log(obj[index])
    // return renderFrame(frame)
    return(
    // (obj[index]==undefined) ? 
    // <Board finished = {true} round = {obj[index-1]}/> :
    // <Board finished = {false} round = {obj[index]}/>)
    <Board finished = {false} round = {obj[1]}/>)
    // por alguna extrania razon del universo esto funciona!!!! :D 
}

export default Animation; 

