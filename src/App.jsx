import { useState } from 'react'
import viteLogo from '/vite.svg'
import './style/styles.css'
import './Compoment/Container'
import Container from './Compoment/Container'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
    <h1>ModelUN Hub｜模聯交流站</h1>
    <p>一個結合模聯實作、知識交流與制度創新的 Discord 社群平台</p>
  </header>
  <main>
    <section>
      <h2>我們是誰？</h2>
      <p>ModelUN Hub 是一個由模擬聯合國愛好者自發成立的 Discord 社群，致力於打造高互動、低門檻的模聯實作與學習環境。</p>
    </section>
    <section>
      <h2>我們在做什麼？</h2>
      <ul>
        <li>模聯練習活動與模擬會議</li>
        <li>國際時事與議題討論</li>
        <li>公開資源庫與教學分享</li>
        <li>會員提案制度與共同治理模擬</li>
      </ul>
    </section>
    <section>
      <h2>制度特色</h2>
      <ul>
        <li>草案提案 → 安理會審議 → 全體會員表決 → 專案執行</li>
        <li>七大工作小組 + 安全理事會制度</li>
        <li>開放透明的民主治理流程</li>
      </ul>
    </section>
    <section>
      <h2>加入我們！</h2>
      <p>不論你是模聯新手、老手、或只是對國際事務有興趣的人，我們都歡迎你的加入。</p>
      <a href="https://discord.gg/m74qugdc66" class="button">加入 Discord 伺服器</a>
      <a href="https://instagram.com/modelun_hub/?hl=zh-tw" id="ig">追蹤我們的 Instagram</a>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 ModelUN Hub｜模聯交流站</p>
  </footer>
  </>
  )
}

export default App
