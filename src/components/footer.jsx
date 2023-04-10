import { Footer } from "flowbite-react"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default function Flowfooter() {
  return (
    <>
      <Footer container={true} className="bottom-0 static">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between text-white">
            <Footer.Brand
              href="https://pvcstudio.github.io"
              name="PVC STUDIO"
            />
            <Footer.LinkGroup>
              <Footer.Link href="https://www.youtube.com/@amanpvcstudio4753" className="pr-1">
                Youtube
              </Footer.Link>
              <Footer.Link href="https://www.facebook.com/" className="pr-1">
               Facebook
              </Footer.Link>
              <Footer.Link href="https://www.instagram.com/" className="pr-1">
                Instagram
              </Footer.Link>
              <Footer.Link href="./Contact" className="pr-1">
                Contact
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="#"
            by="PVCstudio™"
            year={2023}
          />
        </div>
      </Footer>
    </>
  )
}