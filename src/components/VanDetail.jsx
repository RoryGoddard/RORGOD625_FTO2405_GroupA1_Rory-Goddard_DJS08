import { useParams } from "react-router-dom"
export default function VanDetail() {
    const params = useParams()
    console.log(params)
    /**
     * Challenge part 1:
     * Re-write what I just wrote and console log the params object
     */
    return <h1>Van detail page goes here</h1>
}