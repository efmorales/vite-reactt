export default function Info() {
    return (
        <div className="info">
            <img className="info--img" src="https://cdn.discordapp.com/attachments/1014713494098157708/1081257350691835974/Zana_a_dragon_with_rainbow_feathered_scales_close_up_shot_sunse_17dd7fcd-4d75-49ad-85e5-4c006e54a375.png" alt="Dragon" />
            <h1 className="info--title">Enzo Morales</h1>
            <h4 className="info--position">Fullstack developer & Design researcher</h4>

            <div className="info-buttons">

                <a href="mailto::enzomorales@hey.com">
                    <button className="info--button-email" type="button">
                        Email
                    </button>
                </a>

                <a href="https://pe.linkedin.com/in/enzomoralescanales">
                    <button className="info--button-li" type="button">
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}