import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="mt-64 mb-8 container-fluid">
        <div className="row">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row max-w-screen-lg rounded-lg mx-3 p-5 md:p-10 border border-gray-300">
              <div className="flex flex-col mb-4">
                <div className="flex-col gap-4 mb-8">
                  <div className="flex gap-2 mb-4">
                    <img
                      src="/images/logo.png"
                      alt="Afforai Logo"
                      className="h-6 w-6"
                    />
                    <div className="text-dark font-medium text-lg">Afforai</div>
                  </div>
                  <div className="text-gray-700 text-sm mb-4 w-10/12">
                    Afforai is your research tool in to damn near anything.
                    Helping you summarise, translate, and withdraw data from
                    documents.
                  </div>
                  <div className="text-sm text-gray-700">
                    Copyright © 2023 Afforai Inc. All rights reserved.
                  </div>
                </div>
                <Link
                  href="https://www.producthunt.com/posts/afforai?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-afforai"
                  target="_blank"
                >
                  <img
                    src="/images/top-post-badge.svg"
                    alt="Afforai - Summarize, interact, translate your documents with AI | Product Hunt"
                    className="w-48 h-10 mb-4"
                  />
                </Link>
                <div className="flex-col gap-2">
                  <div className="font-medium text-lg ml-1">Backed by</div>
                  <img
                    src="/images/sputnikatx.png"
                    alt="Sputnik ATX VC"
                    className="h-12 w-36"
                  />
                </div>
              </div>
              <div className="w-full flex justify-around">
                <div className="flex flex-col gap-5 mb-5">
                  <div className="font-medium text-lg">Company</div>
                  <Link href="/our_story" className="text-gray-700 text-sm">
                    Our Story
                  </Link>
                  <Link
                    href="https://afforai.getrewardful.com/signup"
                    target="_blank"
                    className="text-gray-700 text-sm"
                  >
                    Affiliate
                  </Link>
                  <Link
                    href="/security"
                    className="text-gray-700 text-sm policy"
                  >
                    Security
                  </Link>
                  <Link
                    href="https://trello.com/b/98yNMfwA/afforai-roadmap"
                    target="_blank"
                    className="text-gray-700 text-sm"
                  >
                    Roadmap
                  </Link>
                  <Link href="/contact" className="text-gray-700 text-sm">
                    Contact Us
                  </Link>
                </div>
                <div className="flex flex-col gap-5 mb-5">
                  <div className="font-medium text-lg">Resources</div>
                  <Link
                    href="https://help.afforai.com/"
                    target="_blank"
                    className="text-gray-700 text-sm"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/documentation"
                    className="text-gray-700 text-sm policy"
                  >
                    API Docs
                  </Link>
                  <Link
                    href="/terms_of_use"
                    className="text-gray-700 text-sm policy"
                  >
                    Terms of Use
                  </Link>
                  <Link
                    href="/privacy_policy"
                    className="text-gray-700 text-sm policy"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="w-full flex justify-around">
                <div className="flex flex-col gap-5 mb-5">
                  <div className="font-medium text-lg">Follow Us</div>
                  <Link
                    href="https://www.facebook.com/groups/afforai"
                    target="_blank"
                    className="text-gray-700 text-sm"
                  >
                    Facebook Group
                  </Link>
                  <Link
                    href="https://linkedin.com/company/afforai/"
                    target="_blank"
                    className="text-gray-700 text-sm"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://twitter.com/afforai/"
                    target="_blank"
                    className="text-gray-700 text-sm"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://medium.com/@alec-afforai"
                    target="_blank"
                    className="text-gray-700 text-sm"
                  >
                    Medium Blog
                  </Link>
                </div>
                <div className="flex flex-col gap-5 mb-5">
                  <div className="font-medium text-lg">Language</div>
                  <div className="text-purple-700 text-sm cursor-pointer">
                    English
                  </div>
                  <div className="text-gray-700 text-sm cursor-pointer">
                    Vietnamese
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
