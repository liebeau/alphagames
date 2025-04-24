import Container from './container'

const FooterFemale = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            权谋手腕·后宫之主
          </h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="./contact"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              target='_blank'
            >
              联系导师
            </a>
            <p
              className="mx-3 font-bold"
            >
              免费试看和咨询
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterFemale
