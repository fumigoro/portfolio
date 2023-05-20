import type { NextPage } from 'next'
import Head from 'next/head'
import contents from '../contents/contents.json'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Koki Sakai</title>
      </Head>
      <div className='h-12' />
      <main className='container mx-auto px-4 max-w-4xl'>
        <div className='flex justify-center'>
          <Image src='/images/icon.png' width={200} height={200} alt=''></Image>
        </div>
        <div className='flex justify-center'>
          <div className='text-5xl font-bold my-4'>KOKI SAKAI</div>
        </div>
        <div className='flex justify-center gap-4 my-2 mb-8'>
          <a href='https://github.com/fumigoro'>
            <Image src='/images/github-mark.svg' width={40} height={40} alt='GitHub'></Image>
          </a>
          <a href='https://qiita.com/fumigoro'>
            <Image src='/images/qiita.png' width={40} height={40} alt='Qiita'></Image>
          </a>
          <a href='https://twitter.com/fumi_chandayo'>
            <Image src='/images/icon_twitter_color.png' width={40} height={40} alt='Twitter'></Image>
          </a>
        </div>
        <div className='text-3xl font-bold mb-2 text-gradient-to-r from-indigo-500 to-pink-500'>About</div>
        <div className='flex justify-center text-lg mb-8'>
          2000年愛知県生まれ、現在は岐阜大学工学部に在籍しています。
          大学入学時に入った技術系サークルProg-Gにて刺激を受けプログラミングを始めました。
          「面倒な動作を解消する！」このへのモチベーションが高く、自分自身が日々感じてきた面倒な作業から開放してくれるコンテンツを中心に制作しています。
          Webアプリ、WebAPI(バックエンド)、ちょっとした自動化ツールなどを作ってきました。
        </div>
        <div className='text-3xl font-bold mb-2'>Skills</div>
        <div>最近よく使っている技術スタック</div>
        <div className='flex flex-wrap mb-8 mt-2 gap-2'>
          {['TypeScript', 'React', 'Next.js', 'Python', 'Google Apps Script', 'Google Cloud Run'].map(item => (
            <div key={item} className='text-white bg-sky-600 rounded-lg px-3 py-1' >{item}</div>
          ))}
        </div>
        <div className='text-3xl font-bold mb-2'>Works</div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-8 mb-8'>
          {contents.works.map((works, idx) => (
            <div key={idx}>
              <a href={works.link} target='_blank' rel='noreferrer'>
                <div className={`transition duration-300 relative mb-4 ${works.link && 'hover:cursor-pointer hover:scale-105'}`}>
                  <Image
                    className="rounded-lg"
                    src={`/images/${works.image}`}
                    alt={`${works.title}のサムネイル画像`}
                    width={1280}
                    height={720}
                    layout="responsive"
                  />
                </div>
                <div className="text-xl font-bold mb-1">{works.title}</div>
                <div className="font-medium text-sky-500">
                  {works.technology.map((item) => (
                    <div key={item} className='inline mr-2'>{item}</div>
                  ))}
                </div>
                <div className="flex gap-2 text-gray-500">
                  {works.description}
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className='text-3xl font-bold mb-4'>プログラミングサークルでの活動</div>
        <div>(追記)2022年4月現在、岐阜大学プログラミングサークルProg-Gは活動を休止しています。</div>
        <div className='my-2 hidden md:block'>
          {contents.writing.map((writing, idx) => (
            <div key={idx} className='grid grid-cols-3 mb-2'>
              <div className=''>
                <a href={writing.link} target='_blank' rel='noreferrer'>
                  <div className={`transition duration-300 relative mb-4 ${writing.link && 'hover:cursor-pointer hover:scale-105'}`}>
                    <Image
                      className="rounded-lg"
                      src={`/images/${writing.image}`}
                      alt={`${writing.title}のサムネイル画像`}
                      width={1280}
                      height={720}
                      layout="responsive"
                    />
                  </div>
                </a>
              </div>

              <div className='col-span-2 ml-4'>
                <div className="text-xl font-bold mb-1">{writing.title}</div>
                <div className="flex gap-2 font-medium text-sky-500">
                  {writing.technology.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
                <div className="flex gap-2 text-gray-500">
                  {writing.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='grid md:grid-cols-2 gap-8 mb-8 sm:block md:hidden'>
          {contents.writing.map((works, idx) => (
            <div key={idx}>
              <a href={works.link} target='_blank' rel='noreferrer'>
                <div className={`transition duration-300 relative mb-4 ${works.link && 'hover:cursor-pointer hover:scale-105'}`}>
                  <Image
                    className="rounded-lg"
                    src={`/images/${works.image}`}
                    alt={`${works.title}のサムネイル画像`}
                    width={1280}
                    height={720}
                    layout="responsive"
                  />
                </div>
                <div className="text-xl font-bold mb-1">{works.title}</div>
                <div className="font-medium text-sky-500 ">
                  {works.technology.map((item) => (
                    <div key={item} className='inline'>{item}</div>
                  ))}
                </div>
                <div className="flex gap-2 text-gray-500">
                  {works.description}
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
