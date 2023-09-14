import React from 'react'
import './article.css';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {textVariant} from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { articles } from '../constants';

const ArticleCard = ({articles}) => (
  <VerticalTimelineElement 
  contentStyle={{background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  date={articles.date}
  iconStyle={{background: articles.iconBg }}
  icon={<div className='flex justify-center items-center w-full h-full'>
    <img src= {articles.icon}
    alt= {articles.company_name}
    className='w-[60%] h-[60%] object-contain'
    />
  </div>}
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{articles.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{articles.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 spac-y-2'>
      {articles.points.map((point, index) => (
        <li key={`article-point-${index}`}
        className='text-white-100 text-[14px]
        pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Article = () => {
  return (
    <section id="article">
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Article</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {articles.map((articles, index) => (
            <ArticleCard key={index} articles={articles} />
          ))}
        </VerticalTimeline>
      </div>

    </section>
  )
}

export default SectionWrapper(Article, "work")