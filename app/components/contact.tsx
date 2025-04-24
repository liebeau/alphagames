import { Image } from "@nextui-org/react"

const Contact = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="text-4xl lg:text-[5rem] font-bold tracking-tighter leading-tight text-center">WeChat ID : </h1>
      <h1 className="text-4xl lg:text-[5rem] font-bold text-red-500 tracking-tighter leading-tight text-center">alpha91game</h1>
      <h1 className="text-4xl lg:text-[5rem] font-bold text-red-500 tracking-tighter leading-tight text-center">alpha91game001</h1>
      <h1 className="text-4xl lg:text-[5rem] font-bold text-red-500 tracking-tighter leading-tight text-center">alpha91game007</h1>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
          <Image
          width={1024}
          alt="Contact Image"
          src="https://rational.oss-cn-shenzhen.aliyuncs.com/Contact/wechatid-alpha91game.png"
        />
        </div>
      </div>
      <br />

      
      
      
      
    </div>
  )
}

export default Contact