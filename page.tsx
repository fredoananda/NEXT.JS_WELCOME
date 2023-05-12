import Image from "next/image";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Welcome to Next.js!
      <p>
        ALFREDO
      </p>
      </h1>
      <p className="description">
        Get started by editing 
      </p>
      <div className="grid">
        <a href="https://github.com/fredoananda" className="card">
          <h2>GITHUB &rarr;</h2>
          <p>always exploring new repositories and contributing to exciting projects. Follow me to stay updated on my latest open source contributions and collaborative efforts. hesitate to reach out and connect!</p>
        </a>
        <a href="https://twitter.com/lubangdomba" className="card">
          <h2>TWITTER &rarr;</h2>
          <p>always sharing my thoughts, engaging in lively discussions, and connecting with new people. Follow me to stay updated on my latest tweets, trending topics, and social media insights. Let connect and explore the exciting world of Twitter together!</p>
        </a>
        <a href="https://www.youtube.com/channel/UCsIyrPgH8h46eOtdIKy4YEg" className="card">
          <h2>YOUTUBE &rarr;</h2>
          <p>Looking for me on YouTube? You can find me by searching for my channel using my unique username. On my channel, I constantly exploring new topics, creating engaging content, and connecting with my audience. From tutorials to reviews to entertaining vlogs, my channel has something for everyone. So hit that subscribe button to join the community and never miss an update! Let explore the exciting world of YouTube together!</p>
        </a>
      </div>
    </div>
  );
}
