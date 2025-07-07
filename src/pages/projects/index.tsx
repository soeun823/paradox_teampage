import type {FC} from "react";
import Windeath44 from '@assets/windeath44.svg'
import * as _ from "./style.ts"

const Projects:FC = () => {
    return (
        <_.main id="2">
            <_.section>
                <_.Img src={Windeath44} alt={"프로젝트"}/>
            </_.section>
        </_.main>
    )
}
export default Projects;