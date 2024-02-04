import { Button } from 'flowbite-react'
import './FirstLook.css'
export default function FirstLook() {
  return (
    <>
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
    <button
        type="button"
        href="/home"
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        Button
    </button>
    <button class="button" className='bg-primary'>
        <a href="/home"><button>Entrer dans l'Univers</button></a>
    </button>
    </>
  )
}