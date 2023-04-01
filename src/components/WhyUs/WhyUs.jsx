import React from 'react'
import "./WhyUs.css"

export default function WhyUs() {
  return (
    <div className='whyUsContainer'>
        <p  style={{textAlign:'center', color:"yellow"}}> מתאימים לכל הגילאים והמינים</p>
        <h1 style={{textAlign:'center'}} >?למה אנחנו </h1>
        <div className='whyUsContent' dir='rtl'>
            <div className='whyuscards'>
                <div><a target="_blank" href="https://icons8.com/icon/52406/stepper"><img
              src="/public/stepper.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            /></a><a target="_blank" href="https://icons8.com"></a></div>
                <div  className='whyuscardsContent'>
                <h3>אווירת חדר כושר</h3>
            <p>חדר הכושר שלנו מספק אווירה ידידותית ותומכת שעוזרת לך להרגיש בנוח ומוטיבציה במהלך האימונים שלך.
            אנו מאמינים שסביבה חיובית יכולה לעשות את כל ההבדל בכל הנוגע להשגת יעדי הכושר שלך.
            חדר הכושר שלנו הוא מרחב מסביר פנים וידידותי שבו אתה יכול להרגיש בטוח ונתמך במסע הכושר שלך.</p>
            </div>
            </div>
            <div className='whyuscards'>
            <div><a target="_blank" href="https://icons8.com/icon/52406/stepper"><img
              src="/public/dumbel.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            /></a><a target="_blank" href="https://icons8.com"></a></div>
                <div  className='whyuscardsContent'>
                <h3>סוגי ציוד</h3>
                <p>אנו מציעים מגוון מקיף של ציוד חדיש שיתאים לכל רמות הכושר.
הציוד שלנו כולל הכל, ממשקולות חופשיות ומכונות התנגדות ועד מכשירי אירובי וציוד אימון פונקציונלי.
הציוד שלנו מתוחזק ומטופל באופן שוטף כדי להבטיח שהוא תמיד במצב מצוין לשימושך.</p>
</div>
            </div>
            <div className='whyuscards'>
            <div><a target="_blank" href="https://icons8.com/icon/52292/curls-with-dumbbells"><img
              src="/public/trainer.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            /></a><a target="_blank" href="https://icons8.com"></a></div>
                <div  className='whyuscardsContent'>
                <h3>מאמנים</h3>
                <p>המאמנים המוסמכים שלנו נלהבים מכושר ומסורים לעזור לך להשיג את המטרות שלך.
הם יעבדו איתך על מנת לפתח תוכנית אימונים מותאמת אישית המותאמת לצרכים הספציפיים ולרמת הכושר שלך.
המאמנים שלנו בעלי ידע וניסיון בתחומם, והם תמיד זמינים לענות על כל שאלה ולספק תמיכה והכוונה.</p>
</div>
</div>
            <div className='whyuscards'>
            <div><a target="_blank" href="https://icons8.com/icon/52406/stepper"><img
              src="/public/pilates.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            /></a><a target="_blank" href="https://icons8.com"></a></div>
                <div  className='whyuscardsContent'>
                <h3>מקצועי וידידותי</h3>
                <p>בחדר הכושר שלנו, אנו מתגאים בכך שאנו מספקים סביבה מקצועית וידידותית.
הצוות שלנו בקיא, נגיש ותמיד מוכן לעזור.
אנו מאמינים ביצירת אווירה חיובית ותומכת בה כולם מרגישים רצויים ומעודדים להשיג את המיטב.</p></div>
        </div>
        </div>
    </div>
  )
}
