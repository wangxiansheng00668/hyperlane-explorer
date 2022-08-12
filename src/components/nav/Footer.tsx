import Image from 'next/future/image';

import Book from '../../images/icons/book.svg';
import Briefcase from '../../images/icons/briefcase.svg';
import InfoCircle from '../../images/icons/info-circle.svg';
import Abacus from '../../images/logos/abacus.svg';
import Discord from '../../images/logos/discord.svg';
import Github from '../../images/logos/github.svg';
import Twitter from '../../images/logos/twitter.svg';

export function Footer() {
  return (
    <footer className="w-screen px-3 py-5 sm:pl-6 sm:pr-8 opacity-90">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Abacus} alt="Abacus Logo" width={60} height={60} />
          <div className="flex flex-col ml-3">
            <h2 className="font-medium leading-4 pt-px">Abacus</h2>
            <p className="text-xs font-light">
              Abacus is a platform
              <br />
              for building interchain
              <br />
              decentralized applications
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 gap-y-4 gap-x-8">
          <FooterIconLink
            to="https://twitter.com/Abacus_Network"
            imgSrc={Twitter}
            text="Twitter"
          />
          <FooterIconLink
            to="https://docs.useabacus.network"
            imgSrc={Book}
            text="Docs"
          />
          <FooterIconLink
            to="https://www.useabacus.network"
            imgSrc={InfoCircle}
            text="About"
          />
          <FooterIconLink
            to="https://discord.gg/VK9ZUy3aTV"
            imgSrc={Discord}
            text="Discord"
          />
          <FooterIconLink
            to="https://github.com/abacus-network"
            imgSrc={Github}
            text="Github"
          />
          <FooterIconLink
            to="https://jobs.lever.co/Abacus"
            imgSrc={Briefcase}
            text="Jobs"
          />
        </div>
      </div>
    </footer>
  );
}

function FooterIconLink({
  to,
  imgSrc,
  text,
}: {
  to: string;
  imgSrc: any;
  text: string;
}) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:underline hover:opacity-70 transition-all"
    >
      <Image src={imgSrc} alt={text} width={18} height={18} />
      <span className="ml-2 text-sm">{text}</span>
    </a>
  );
}