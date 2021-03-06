import React from 'react'

import './Footer.scss'

const Footer = () => {
  return (
    <footer key="footer-content">
      <div className="container">
        <div className="footer__navigation">
          <ul>
            <li><h5>Nossos Produtos</h5></li>
            <li>Suite Completa</li>
            <li>Retail Analytcs</li>
            <li>Sales Intelligence</li>
            <li>Locate Store</li>
            <li>Content Compliance</li>
          </ul>
          <ul>
            <li><h5>Institucional</h5></li>
            <li>Sobre Nós</li>
            <li>Nossa Equipe</li>
            <li>Na Mídia</li>
          </ul>
          <ul className="social__media">
            <li><h5>Siga-nos</h5></li>
            <li><a href=""><svg><path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path></svg></a></li>
            <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><g><path d="M10.497.04c-2.85 0-3.21.013-4.328.064C5.05.154 4.29.33 3.62.586c-.69.266-1.275.62-1.858 1.198C1.178 2.36.82 2.94.552 3.624c-.26.66-.438 1.414-.49 2.52C.013 7.25 0 7.603 0 10.423c0 2.82.012 3.174.063 4.28.05 1.107.23 1.86.488 2.522.27.683.628 1.262 1.212 1.84.583.576 1.17.93 1.86 1.197.667.256 1.43.432 2.547.482 1.118.05 1.476.063 4.327.063 2.85 0 3.208-.012 4.327-.063 1.118-.05 1.88-.226 2.548-.482.69-.266 1.276-.62 1.86-1.198.583-.577.942-1.156 1.21-1.84.26-.66.437-1.414.488-2.52.05-1.107.063-1.46.063-4.28 0-2.82-.012-3.174-.063-4.282-.05-1.105-.228-1.86-.488-2.52-.268-.683-.627-1.262-1.21-1.84-.584-.576-1.17-.93-1.86-1.197-.667-.256-1.43-.432-2.548-.482-1.12-.05-1.477-.063-4.327-.063m0 1.872c2.802 0 3.134.01 4.24.06 1.025.047 1.58.216 1.95.358.49.188.84.413 1.207.777.368.363.595.71.785 1.194.143.367.314.916.36 1.93.05 1.094.062 1.422.062 4.194 0 2.773-.01 3.1-.06 4.196-.048 1.012-.22 1.562-.363 1.928-.19.485-.418.83-.786 1.194-.367.363-.717.588-1.207.777-.37.14-.925.31-1.95.356-1.105.05-1.437.06-4.24.06s-3.135-.01-4.242-.06c-1.023-.046-1.58-.215-1.95-.357-.49-.19-.84-.415-1.206-.778-.368-.363-.596-.71-.786-1.194-.144-.366-.315-.916-.362-1.928-.05-1.095-.06-1.423-.06-4.196 0-2.772.01-3.1.06-4.195.047-1.014.218-1.563.362-1.93.19-.484.418-.83.785-1.193.366-.364.716-.59 1.206-.777.37-.142.926-.31 1.95-.357 1.106-.05 1.438-.06 4.24-.06"></path><path d="M10.497 13.885c-1.933 0-3.5-1.55-3.5-3.46 0-1.912 1.567-3.462 3.5-3.462 1.932 0 3.5 1.55 3.5 3.46 0 1.913-1.568 3.462-3.5 3.462m0-8.792c-2.977 0-5.39 2.387-5.39 5.33 0 2.946 2.413 5.333 5.39 5.333s5.39-2.387 5.39-5.332c0-2.944-2.413-5.33-5.39-5.33M17.36 4.882c0 .688-.565 1.246-1.26 1.246-.696 0-1.26-.558-1.26-1.246s.564-1.246 1.26-1.246c.695 0 1.26.558 1.26 1.246"></path></g></svg></a></li>
            <li><a href=""><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.52 0H1.48C.66 0 0 .65 0 1.44v17.12C0 19.36.66 20 1.48 20h17.04c.82 0 1.48-.65 1.48-1.44V1.44C20 .64 19.34 0 18.52 0zM2.88 7.3h2.9v9.28h-2.9V7.3zm1.45-1.27c-.93 0-1.68-.75-1.68-1.68 0-.92.75-1.67 1.68-1.67.92 0 1.67.75 1.67 1.67 0 .93-.75 1.68-1.67 1.68zm12.25 10.55H13.7v-4.5c0-1.1-.02-2.48-1.5-2.48-1.5 0-1.73 1.18-1.73 2.4v4.58h-2.9V7.3h2.78v1.26h.04c.35-.73 1.3-1.5 2.7-1.5 2.92 0 3.46 1.93 3.46 4.43v5.06z"></path></svg></a></li>
            <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"/></svg></a></li>
          </ul>
          <ul>
            <li><h5>Contato</h5></li>
            <li>Alameda Jaú, 1754 – 10º andar – Jardim Paulista, São Paulo – SP</li>
            <li>+55 11 3057-2531</li>
            <li>contato@intellibrand.ai</li>
          </ul>
        </div>
        
        <div className="copyright">
          <p>© Copyright 2019 Intellibrand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

