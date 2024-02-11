export default function CardElement(props) {
  const {image, title, text, button, seeText } = props

  return (
    <>
      <div
        class="flex flex-col justify-between items-center rounded-lg bg-white font-body shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <a href="#!">
          <img class="rounded-t-lg" src={image} alt="" />
        </a>
        {seeText === true && 
          <div class="flex flex-col justify-between p-6">
            <h5 class="mb-2 text-xl leading-tight text-neutral-800 dark:text-neutral-50">
              {title}
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {text}
            </p>
          </div>
        }
        <button type="button" class="inline-block w-2/3 b-2 rounded bg-primary px-6 pb-2 pt-2.5 my-2 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
          {button}
        </button>
      </div>
    </>
  )
}