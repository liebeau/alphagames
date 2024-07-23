import {Image} from "@nextui-org/react";

const Dating = () => {
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
      width={800}
      alt="Dating Image"
      src="https://rational.oss-cn-shenzhen.aliyuncs.com/Dating/d001.png"
    />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
      width={800}
      alt="Dating Image"
      src="https://rational.oss-cn-shenzhen.aliyuncs.com/Dating/d002.png"
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
                 本套课程旨在以最高效率的方式帮你打到炮。
          </p>
          <p className="text-gray-700 text-lg mb-2">
                 传授你约会的SOP和各种细节操作，从而顺利走到收尾阶段，发生超友谊关系，以及一些床上的技巧和发生完超友谊关系往后的路该怎么走。
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">一、约会篇</h1>
          <p className="text-gray-700 text-lg mb-2">
                 在约会阶段是能够做到让对方喜欢上你、爱上你的，在这一板块我会教你如何筛选（红丸密训营的25条Red Flags）、观察对方的兴趣指标、肢体语言等，以及根据对方的反应该如何及时调整自己的策略，还有约会推进时女人给你设的障碍该如何破解，从而顺利打到炮。
          </p>
          <p className="text-gray-700 text-lg mb-2">
                 还有如果约会以失败收尾，该如何扭转颓势，这类一系列坏因素我都会为你提前想好对策，当事情往不好的方向发展的时候，要懂得如何把方向导正回来。
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">二、收尾X篇</h1>
          <p className="text-gray-700 text-lg mb-2">
                 收尾篇，最主要教你两样：如何脱掉她的衣服、怎么点燃她的欲望和事后如何避免被告强奸，具体操作细节太多马赛克，这里不过多赘述，只能在线下讲。
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">三、性福美满篇</h1>
          <p className="text-gray-700 text-lg mb-2">
                 第三部分讲床上关于性事的内容，也是太多马赛克，线下讲。
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">四、关系管理篇</h1>
          <p className="text-gray-700 text-lg mb-2">
                 第四部分会结合红药丸讲，告诉你该选择走怎样的关系，以及出来转盘子有些不能碰的禁区，严重的会影响你的人生。还会告诉你各种关系选择的利弊，如果走长期关系该如何施展你的Game、如何让你的Alpha框架屹立不倒等等。
          </p>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Dating