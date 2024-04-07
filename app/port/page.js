import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./_component";

export default function Home() {
  return (
    <main>
      <div className={styles.resume_subject}>
        <h3>
          이송의 이력서
        </h3>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/my.png"
            width={170}
            height={190}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.image_left}>
          <div className={styles.image_test}>
            <div className={styles.profile_info_general_name}> 이 송</div>
            <div className={styles.profile_info_general_year}>
              남 2000년 (만 24세)
            </div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}>휴대폰 | 010-2046-9934</div>
            <div class={styles.profile_label}>Email | skrs15@naver.com</div>
            <div class={styles.profile_label}>전화번호 | 010-2046-9934</div>
            <div class={styles.profile_label}>
              주소 | 경기도 기흥구 구갈동 554-6
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}>학력</div>
            <div className={styles.grid_item}> </div>
            <div className={styles.grid_item}>
              <div>가천대학교</div>
              <div></div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>경력</div>
            <div className={styles.grid_item}>원진 1년 4개월 </div>
            <div className={styles.grid_item}>
              <div>씨티케이 ~ 근무 중</div>
              <div></div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>
              인턴&middot;대외활동 / 해외경험
            </div>
            <div className={styles.grid_item}>-</div>
          </div>

          <div>
            <div className={styles.grid_item}>전기기능사</div>
            <div className={styles.grid_item}>설비보전기능사</div>
            <div className={styles.grid_item}>승강기기능사</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.keyword_box}>
        <div className={styles.grid_item}>기업 정보 홈페이지(바로가기)</div>
        <Link href="https://e-ctk.com/reliability">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>CTK</span>
            </button>
          </Link>

          <Link href="https://www.onegene.com/">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>원진</span>
            </button>
          </Link>
         
      
        </div>
      </section>
      <section>
        <h1 className={styles.school_title}>학력</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div>2016</div>
              <div>졸업</div>
            </div>
            <div>
              <div>
                <div>청양중학교 </div>
                <div></div>
              </div>
              <div>
                <div>
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>2019</div>
              <div>졸업 </div>
            </div>
            <div>
              <div>
                <div>연무대 마이스터 고등학교 </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carrer />
    </main>
  );
}
