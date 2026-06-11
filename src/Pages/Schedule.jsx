import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TIMELINE = [
  {
    date: '6/11 (木)',
    time: '16:30〜17:50+',
    label: 'キックオフ',
    note: '対面。詳細タイムテーブルは下記参照',
    targetId: 'kickoff-timetable',
  },
  { date: '6/13 (土)', time: '12:00', label: '開発開始', note: 'ハックオフ', highlight: true },
  { date: '6/18 (木)', time: '17:00〜18:00', label: '中間発表会', note: 'オンライン開催' },
  { date: '6/20 (土)', time: '12:00', label: 'コードフリーズ', note: '開発終了', highlight: true },
  { date: '6/21 (日)', time: '終日', label: '最終プレゼンテーション', note: '対面・審査会', highlight: true },
];

const KICKOFF_NOTES = [
  '予定に合わせて途中参加・途中帰宅できます。',
  '体調が悪い場合は無理せず、事前に連絡してください。',
];

const KICKOFF_TIMETABLE = [
  { time: '16:30〜17:00', label: '受付', note: '到着した人から順次受付' },
  { time: '17:00〜17:10', label: '説明・チーム分け', note: 'ハッカソンの流れを簡単に共有' },
  { time: '17:10〜17:20', label: 'アイスブレイク', note: '懇親会としてチーム内で交流' },
  { time: '17:20〜17:50', label: 'GitHub説明', note: '分からないことはこの時間に確認' },
  { time: '17:50〜', label: '開発計画・自由解散', note: 'チームごとに方針を決めて解散' },
];

const Schedule = () => (
  <div className="subpage">
    <div className="subpage-hero">
      <div className="subpage-hero-inner">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="subpage-eyebrow">
          INFORMATION
        </motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="subpage-title">
          Schedule
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="subpage-lead">
          開催概要・アクセス
        </motion.p>
      </div>
    </div>

    <div className="subpage-body">
      <motion.p
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="section-label"
      >
        TIMELINE
      </motion.p>
      <motion.p
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="subpage-note"
      >
        ※ 6/11の詳細タイムテーブルを追加しました。
      </motion.p>

      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            custom={i * 0.5}
            className={`timeline-item${item.highlight ? ' timeline-item--highlight' : ''}`}
          >
            <div className="timeline-dot" />
            {item.targetId ? (
              <a className="timeline-content timeline-content--link" href={`#${item.targetId}`}>
                <div className="timeline-date">{item.date} <span className="timeline-time">{item.time}</span></div>
                <div className="timeline-label">{item.label}</div>
                {item.note && <div className="timeline-note">{item.note}</div>}
              </a>
            ) : (
              <div className="timeline-content">
                <div className="timeline-date">{item.date} <span className="timeline-time">{item.time}</span></div>
                <div className="timeline-label">{item.label}</div>
                {item.note && <div className="timeline-note">{item.note}</div>}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        id="kickoff-timetable"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="subpage-section-gap"
      >
        <p className="section-label">6/11 TIMETABLE</p>
        <div className="schedule-detail-head">
          <h2 className="schedule-detail-title">キックオフ当日の流れ</h2>
          <p className="schedule-detail-lead">
            身の回りで風邪が流行っているので、体調管理に気をつけて参加してください。
          </p>
        </div>

        <div className="schedule-note-list">
          {KICKOFF_NOTES.map((note) => (
            <p key={note} className="schedule-note-item">{note}</p>
          ))}
        </div>

        <div className="day-schedule">
          {KICKOFF_TIMETABLE.map((item) => (
            <div key={`${item.time}-${item.label}`} className="day-schedule-row">
              <div className="day-schedule-time">{item.time}</div>
              <div className="day-schedule-content">
                <h3 className="day-schedule-label">{item.label}</h3>
                <p className="day-schedule-note">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="subpage-section-gap"
      >
        <p className="section-label">VENUE</p>
        <div className="venue-card">
          <div className="venue-icon">
            <MapPin size={20} color="#0057ff" />
          </div>
          <div>
            <p className="venue-name">立命館大学 大阪茨木キャンパス（OIC）</p>
            <p className="venue-address">大阪府茨木市岩倉町2-150</p>
            <p className="venue-access">JR茨木駅から徒歩約5分</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="map-wrap"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.7118182276324!2d135.55909241199347!3d34.81438967702812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fcc06990393d%3A0x6b40556157077983!2z56uL5ZG96aSo5aSn5a2mIOWkp-mYqueMqOacqOOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1715753000000!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  </div>
);

export default Schedule;
