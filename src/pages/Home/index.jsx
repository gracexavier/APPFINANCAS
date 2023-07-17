import { InfoTable } from "../../components/infoTable"
import { Information } from "../../components/information"
import { InputsContainer } from "../../components/inputsContainer"
import './styles.css'

export const Home = () => {
    return (
        <div className="container">

            <Information />

            <InputsContainer />

            <InfoTable />
        </div>

    )

}