
const BotList = ({robots, robot, setRobot}) => {
    return (
        <div>
            <form>
                <select 
                required
                type="number" 
                name = "robot"
                onChange={(e) => 
                    setRobot({ ...robot, robot_id: e.target.value,
                                         robot_name: e.target.value.name})}
                >
                <option value = {''}> seleccione un robot </option>
                {Object.keys(robots).map((key)=>
                (<option key = {key} value={key}>{robots[key].name}</option>))}
                </select>
            </form>
        </div>
    )
}

export default BotList;
