export default function Footer ({ version, date_updated }) {
  return (
    <footer>
      <p>🔧 par Zacharie Dettwiler en 2023</p>

      <p className='sources'>
        avec les données de<br />
        <a href='https://github.com/STEPBible/STEPBible-Data/tree/master/Translators%20Amalgamated%20OT%2BNT'>THHOT</a> ∙ <a href='https://github.com/STEPBible/STEPBible-Data/tree/master/Translators%20Amalgamated%20OT%2BNT'>THGNT</a><br />
        <a href='https://www.levangile.com/Liste-Strong-Grec.php'>Levangile</a> ∙ R. Pigeon (<a href='https://editeurbpc.com'>editeurbpc.com</a>).
      </p>

      <p>LLB {version} ({date_updated})</p>

      <p><a href='https://www.institutbiblique.be'>
        <svg width='200px' viewBox='0 0 980 150' xmlns='http://www.w3.org/2000/svg'><title>Institut Biblique de Bruxelles</title><path d='m175.4 113.6c7.9-.7 15.1-.8 22.1-2.1 11.7-2.1 23.3-4.8 34.7-7.8 3.3-.8 6.4-3 9.2-5.1 4-3 4.1-7-.3-9.5-4.8-2.7-10.1-5-15.5-6.4-7.8-2.1-15.9-3.2-23.9-4.7-4.8-.9-8.6-3.2-10.3-8-1.7-4.7-.5-6.7 4.4-6.1 15.6 2.1 31.1 4.1 46.6 6.8 13.6 2.3 26.9 6.3 39 12.9 6.1 3.3 12.1 7.5 16.8 12.6 6.9 7.3 6.4 15.2 0 23-5.3 6.4-12.4 10.4-19.8 13.8-17 7.8-35.1 11.9-53.5 14.8-23.3 3.7-46.9 5-70.5 4.8-5.6-.1-6.7-1.9-4.2-7 3.9-7.9 11.3-10.2 19.2-10.9 14.2-1.3 28.5-1.9 42.7-3.3 19.2-2 38.2-5.1 56.1-12.6 4.6-1.9 9.1-4.7 13.1-7.8 6-4.8 5.9-11 .1-16-3.8-3.3-7.8-6.4-14.1-7.1 1 1.4 1.5 2.1 2.1 2.7 4.3 4.7 4.6 9.1-.6 12.8-6 4.3-12.5 8.1-19.4 10.8-16.3 6.4-33.5 9.1-50.9 11.1-20.2 2.3-40.5 2.8-60.8 1.5-25.7-1.7-51.1-4.9-75-15.2-4.5-1.9-8.8-4.7-12.6-7.8-5.3-4.5-5.2-8.1-.6-13.4.3-.4.6-.8 1.5-2-1.9.3-3 .1-3.9.6-3.3 1.9-6.7 3.6-9.6 5.9-6.2 5.2-6.3 11.8.2 16.6 5.1 3.7 10.9 6.7 16.8 9 8.7 3.5 17.9 5.9 26.7 9.2 6.4 2.4 10.8 6.8 12 13.9.5 2.8-.3 4.4-3.5 3.8-18.7-3.4-37.3-7.5-54.2-16.5-4.7-2.5-9.2-5.6-13.1-9.2-9.3-8.7-9.4-19.7.3-27.9 5.9-5 12.8-9.1 19.9-12.4 18.6-8.5 38.6-12.3 58.8-14.9 12.6-1.6 25.3-2.2 37.9-3.4 1.3-.1 3-1.4 3.7-2.6 7.6-12.6 10.6-27.1 11.1-41.5.2-5.5-.2 2.7 0-2.8.1-3.4 1.8-5.6 5.2-5.6s5.1 2 5.3 5.5c.4 8.4.5 3.4.9 11.8 1.1 21.8 10.5 39.5 26.5 53.8 4.5 4.1 9.7 7.6 14.7 11 3.7 2.6 4.3 5.1.2 6.9-7 3.1-14.4 5.4-21.7 7.5-4.6 1-7.3 2.2-9.8 6.5zm-45.2-36.6c-1.3 0-1.9-.1-2.4 0-10.3 1.5-20.8 2.6-31 4.7-6.3 1.3-12.5 3.7-18.3 6.6-5.8 2.8-5.4 7-.4 10.9 4.4 3.4 8.7 1.5 13.1.7 15.3-3.1 28-10.8 39-22.9z' transform='matrix(1.05619 0 0 1.05619 -16.2915 -11.1956)' /><g fillrule='nonzero'><path d='m375.9563 28.2951h7.452v37.8h-7.452z' strokewidth='54' /><path d='m.47-.273-.3-.427h-.105v.7h.138v-.428l.3.428h.105v-.7h-.138z' transform='matrix(54 0 0 54 396.3683 66.0951)' /><path d='m.304.014c.075 0 .136-.019.183-.057s.071-.089.071-.154c0-.04-.011-.075-.026-.099-.013-.024-.045-.049-.066-.062-.01-.007-.025-.014-.044-.021-.019-.008-.034-.014-.045-.017l-.048-.016c-.052-.016-.087-.031-.106-.044-.018-.014-.027-.032-.027-.054 0-.041.035-.07.092-.07.061 0 .106.03.134.09l.116-.067c-.048-.099-.137-.157-.25-.157-.063 0-.118.019-.163.057-.045.037-.067.088-.067.151 0 .064.023.112.066.144.044.031.082.046.145.065.057.016.096.031.118.045.022.013.033.032.033.057 0 .043-.035.074-.112.074-.08 0-.134-.036-.161-.107l-.118.069c.039.107.136.173.275.173z' transform='matrix(54 0 0 54 441.5663 66.0951)' /><path d='m.013-.7v.132h.188v.568h.138v-.568h.189v-.132z' transform='matrix(54 0 0 54 481.1483 66.0951)' /><path d='m523.2683 28.2951h7.452v37.8h-7.452z' strokewidth='54' /><path d='m.013-.7v.132h.188v.568h.138v-.568h.189v-.132z' transform='matrix(54 0 0 54 543.6803 66.0951)' /><path d='m.326.014c.079 0 .143-.022.193-.066s.075-.103.075-.177v-.471h-.138v.46c0 .073-.041.119-.13.119s-.13-.046-.13-.119v-.46h-.137v.471c0 .074.025.133.075.177s.114.066.192.066z' transform='matrix(54 0 0 54 582.2903 66.0951)' /><path d='m.013-.7v.132h.188v.568h.138v-.568h.189v-.132z' transform='matrix(54 0 0 54 627.0023 66.0951)' /><path d='m.488-.363c.044-.035.066-.082.066-.14 0-.057-.021-.104-.062-.141s-.091-.056-.151-.056h-.276v.7h.297c.061 0 .113-.019.155-.057s.063-.087.063-.146c0-.071-.031-.125-.092-.16zm-.147-.208c.044 0 .075.033.075.077s-.032.077-.075.077h-.138v-.154zm-.138.442v-.165h.159c.047 0 .081.035.081.082 0 .048-.034.083-.081.083z' transform='matrix(54 0 0 54 688.5623 66.0951)' /><path d='m734.1923 28.2951h7.452v37.8h-7.452z' strokewidth='54' /><path d='m.488-.363c.044-.035.066-.082.066-.14 0-.057-.021-.104-.062-.141s-.091-.056-.151-.056h-.276v.7h.297c.061 0 .113-.019.155-.057s.063-.087.063-.146c0-.071-.031-.125-.092-.16zm-.147-.208c.044 0 .075.033.075.077s-.032.077-.075.077h-.138v-.154zm-.138.442v-.165h.159c.047 0 .081.035.081.082 0 .048-.034.083-.081.083z' transform='matrix(54 0 0 54 754.6043 66.0951)' /><path d='m.203-.7h-.138v.7h.405v-.132h-.267z' transform='matrix(54 0 0 54 796.7243 66.0951)' /><path d='m835.7663 28.2951h7.452v37.8h-7.452z' strokewidth='54' /><path d='m.76-.35c0-.102-.036-.188-.107-.258-.071-.071-.156-.106-.257-.106s-.186.035-.257.106c-.071.07-.106.156-.106.258s.035.188.106.259c.071.07.156.105.257.105.063 0 .122-.015.176-.045l.076.079.098-.087-.072-.075c.057-.067.086-.145.086-.236zm-.364.229c-.064 0-.118-.022-.161-.065s-.065-.098-.065-.164c0-.067.022-.122.065-.165s.097-.065.161-.065.118.022.161.065.065.098.065.165c0 .051-.014.097-.042.137l-.123-.128-.098.087.115.12c-.026.009-.052.013-.078.013z' transform='matrix(54 0 0 54 856.1783 66.0951)' /><path d='m.326.014c.079 0 .143-.022.193-.066s.075-.103.075-.177v-.471h-.138v.46c0 .073-.041.119-.13.119s-.13-.046-.13-.119v-.46h-.137v.471c0 .074.025.133.075.177s.114.066.192.066z' transform='matrix(54 0 0 54 908.3963 66.0951)' /><path d='m.203-.289h.265v-.13h-.265v-.149h.29v-.132h-.428v.7h.433v-.132h-.295z' transform='matrix(54 0 0 54 953.1083 66.0951)' /><path d='m.087-.7v.7h.263c.095 0 .174-.034.236-.101.063-.068.094-.151.094-.249s-.031-.181-.094-.248c-.062-.068-.141-.102-.236-.102zm.053.65v-.6h.21c.081 0 .148.029.2.087.052.057.078.128.078.213s-.026.156-.078.214c-.052.057-.119.086-.2.086z' transform='matrix(50 0 0 50 371.5003 131.911)' /><path d='m.14-.328h.32v-.05h-.32v-.272h.345v-.05h-.398v.7h.403v-.05h-.35z' transform='matrix(50 0 0 50 433.3003 131.911)' /><path d='m.46-.363c.055-.029.09-.086.09-.153 0-.051-.018-.094-.054-.13s-.079-.054-.13-.054h-.279v.7h.302c.053 0 .098-.019.135-.056s.056-.082.056-.135c0-.079-.048-.144-.12-.172zm-.094-.287c.036 0 .067.013.092.04.026.026.039.057.039.094s-.013.068-.039.095c-.025.026-.056.039-.092.039h-.226v-.268zm-.226.6v-.282h.249c.038 0 .07.014.097.042.027.027.041.06.041.099s-.014.072-.041.1c-.027.027-.059.041-.097.041z' transform='matrix(50 0 0 50 524.2003 131.911)' /><path d='m.59 0-.174-.294c.045-.012.081-.036.11-.073s.044-.079.044-.126c0-.057-.02-.105-.061-.146s-.089-.061-.146-.061h-.276v.7h.053v-.287h.221l.168.287zm-.227-.65c.043 0 .079.015.109.046s.045.068.045.111-.015.08-.045.111c-.03.03-.066.045-.109.045h-.223v-.313z' transform='matrix(50 0 0 50 580.8003 131.911)' /><path d='m.077-.234c0 .074.023.133.07.178s.109.067.186.067.139-.022.186-.067.071-.104.071-.178v-.466h-.053v.466c0 .117-.075.194-.204.194s-.203-.077-.203-.194v-.466h-.053z' transform='matrix(50 0 0 50 636.6503 131.911)' /><path d='m.317-.36.22-.34h-.061l-.189.293-.19-.293h-.061l.22.34-.233.36h.062l.202-.312.202.312h.061z' transform='matrix(50 0 0 50 694.9503 131.911)' /><path d='m.14-.328h.32v-.05h-.32v-.272h.345v-.05h-.398v.7h.403v-.05h-.35z' transform='matrix(50 0 0 50 749.0503 131.911)' /><path d='m.14-.7h-.053v.7h.383v-.05h-.33z' transform='matrix(50 0 0 50 801.1503 131.911)' /><path d='m.14-.7h-.053v.7h.383v-.05h-.33z' transform='matrix(50 0 0 50 851.2503 131.911)' /><path d='m.14-.328h.32v-.05h-.32v-.272h.345v-.05h-.398v.7h.403v-.05h-.35z' transform='matrix(50 0 0 50 901.3503 131.911)' /><path d='m.301.011c.069 0 .125-.017.167-.052s.063-.082.063-.14c0-.057-.021-.1-.072-.131-.025-.016-.048-.028-.07-.037-.021-.009-.051-.02-.09-.033-.061-.02-.104-.039-.131-.058s-.04-.047-.04-.085c0-.079.062-.135.158-.135.087 0 .147.04.18.121l.045-.025c-.036-.087-.116-.147-.225-.147-.061 0-.111.017-.152.052-.04.034-.06.079-.06.136 0 .035.011.064.023.085.012.02.043.042.062.054.009.006.024.013.043.021l.044.017.05.016c.062.02.108.04.137.061s.044.05.044.089c0 .083-.063.14-.176.14-.112 0-.185-.054-.21-.141l-.046.027c.032.101.127.165.256.165z' transform='matrix(50 0 0 50 953.4503 131.911)' /></g></svg>
      </a>
      </p>

      <a className='discreet' href='https://github.com/zdettwiler/lexique-du-lecteur-biblique'><i className='bi bi-github' /></a>
    </footer>
  )
};
