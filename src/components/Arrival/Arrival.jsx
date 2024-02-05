import './Arrival.css'

export default function ArrivalComponent() {
    return (
        <main className="flex flex-col items-center mt-8">
            <h1 className="absolute w-1/3 mx-auto font-title text-8xl text-white pt-48">
                Les Archives du Tardis
            </h1>
            <aside class="arrival">
                <div class="tHold">
                <div class="tPos">
                    <div class="tRot">
                        <div class="tSide tSideF">
                            <div class="tSign"></div>
                            <div class="tTop"></div>
                            <div class="tBaseSide"></div>
                            <div class="tPanel tPanelL">
                                <div class="tWindowT"></div>
                                <div class="tWindowB"></div>
                            </div>
                            <div class="tPanel tPanelR">
                                <div class="tWindowT"></div>
                                <div class="tWindowB"></div>
                                <div class="tNotice"></div>
                            </div>
                        </div>
                        <div class="tSide tSideL">
                            <div class="tSign"></div>
                            <div class="tTop"></div>
                            <div class="tBaseSide"></div>
                            <div class="tPanel tPanelL">
                                <div class="tWindowT"></div>
                                <div class="tWindowB"></div>
                            </div>
                            <div class="tPanel tPanelR">
                                <div class="tWindowT"></div>
                                <div class="tWindowB"></div>
                            </div>
                        </div>
                        <div class="tSide tSideR">
                            <div class="tSign"></div>
                            <div class="tTop"></div>
                            <div class="tBaseSide"></div>
                            <div class="tPanel tPanelL">
                                <div class="tWindowT"></div>
                                <div class="tWindowB"></div>
                            </div>
                            <div class="tPanel tPanelR">
                                <div class="tWindowT"></div>
                                <div class="tWindowB"></div>
                            </div>
                        </div>
                        <div class="tSide tSideB">
                            <div class="tSign"></div>
                            <div class="tTop"></div>
                            <div class="tBaseSide"></div>
                            <div class="tPanel tPanelL">
                                <div class="tWindowT"></div>
                                <div class="tWindowB"></div>
                            </div>
                            <div class="tPanel tPanelR">
                                <div class="tWindowT"></div>
                                <div class="tWindowB"></div>
                            </div>
                        </div>
                        <div class="tSignTop"></div>
                        <div class="tSignTop tBase"></div>
                        <div class="tLight">
                            <div class="tLightSide"></div>
                            <div class="tLightSide tLightSide1"></div>
                            <div class="tLightSide tLightSide2"></div>
                            <div class="tLightSide tLightSide3"></div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="vortex">
                    <div class="vSpark"></div>
                    <div class="vCloud"></div>
                </div>
            </aside>
            {/* <button
                type="button"
                class="mx-auto mt-8 rounded bg-primary text-white hover:bg-primary-600 focus:bg-primary-600">
                <a href="/home" className="px-6 py-4 font-title text-4xl uppercase leading-normal">
                    Entrer dans l'Univers
                </a>
            </button> */}
        </main>
    )
}