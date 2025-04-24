import { Image } from "@nextui-org/react"

const Basic = () => {
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
      width={800}
      alt="Basic Image"
      src="https://rational.oss-cn-shenzhen.aliyuncs.com/Male/398.png"
    />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
      width={800}
      alt="Basic Image"
      src="https://rational.oss-cn-shenzhen.aliyuncs.com/Male/shit.png"
    />
      </div>
      <br />
      <br />
      <h1 className="text-4xl lg:text-[5rem] font-bold tracking-tighter leading-tight text-center">课程介绍</h1>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">升级录制中</h1>
          <p className="text-red-500 italic font-bold text-lg mb-2">
                 敬请期待
          </p>
        </div>
      </div>
    </div>
  )
}

export default Basic
