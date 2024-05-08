import { ReactElement } from "react";
import './title.css'

type TytleProps = {
	label: string
}

function Title ({label}: TytleProps):ReactElement {
	return <h1 className="title">{label}</h1>
}

export default Title;