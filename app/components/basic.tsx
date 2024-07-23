import {Image} from "@nextui-org/react";

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
      src="https://rational.oss-cn-shenzhen.aliyuncs.com/Basic/799.png"
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
      src="https://rational.oss-cn-shenzhen.aliyuncs.com/Basic/shit.png"
    />
      </div>
      <br />
      <br />
      <h1 className="text-4xl lg:text-[5rem] font-bold tracking-tighter leading-tight text-center">课程介绍</h1>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">课程目标</h1>
          <p className="text-gray-700 text-lg mb-2">
                 本套课程包含了红药丸、Inner Game、Outer Game三个模块，主要是帮助学员树立一个整体的大框架、拥有全局的认知。
          </p>
          <p className="text-gray-700 text-lg mb-2">
                 这课程不仅仅是只讲了技术招式那么简单，更重要的是告诉你们技术的底层逻辑，还有各种生物演化的知识。
          </p>
          <p className="text-gray-700 text-lg mb-2">
                 还有新手小白很关心的问题：不知道讲什么话怎么办？问题很简单，课程后半部分会给你一些话术惯例，不知道讲什么直接套就行，这能够让新手小白快速上手。等累积了一定的实战经验，就能够根据方法创造出无限属于你的话术惯例。
          </p>
          <p className="text-gray-700 text-lg">
                 添加老师微信，免费试看两节课程。
          </p>
          <p className="text-red-700 font-bold text-lg">
                 日后若要报名密训营，799可用于抵扣！！！
          </p>
        </div>
      </div>
    </div>
  )
}

export default Basic