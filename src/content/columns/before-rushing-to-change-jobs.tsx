import { ArticleLayout } from "@/components/columns/article-layout";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("before-rushing-to-change-jobs")!;

if (!article) {
  throw new Error("Article metadata not found for before-rushing-to-change-jobs");
}

export default function BeforeRushingToChangeJobsArticle() {
  return (
    <ArticleLayout article={article}>
      <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        記事の目的
      </h2>

      <ul>
        <li>転職を急ぐ読者に別の視点を届ける</li>
        <li>働き方そのものを見直すきっかけを作る</li>
        <li>「焦りで動く前に、自分の状態を見る」重要性を伝える</li>
      </ul>

      <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        リード
      </h2>

      <ul>
        <li>休職中に転職をすることも検討をしていた</li>
        <li>今の環境から離れれば、苦しさも不安も焦りもなくなる可能性を考えていた</li>
        <li>転職サイトを見たり、求人を調べたり、キャリア相談を受けたりしていた</li>
        <li>転職を目的のように考えていた</li>
      </ul>

      <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        とにかく転職先を探していた
      </h2>

      <ul>
        <li>転職サイトを見ていた</li>
      </ul>

      <ul>
        <li>求人票を開いて、仕事内容・年収・勤務地・働き方を確認していた</li>
        <li>良さそうな求人を保存していた</li>
        <li>条件が合わない求人を見ると「自分に行ける場所はあるのか」と不安になった</li>
        <li>求人を探すことで焦りをごまかしていた</li>
        <li>キャリア相談を受けた</li>
      </ul>

      <ul>
        <li>自分の経験は他の会社で通用するのか知りたかった</li>
        <li>体調のことは隠していたが、それを貫くのがいいのか、正直に話した方がいいのか分からなかった</li>
        <li>相談は考えを整理するきっかけになった</li>
        <li>ただ、「早く決めなければ」という気持ちも強くなった</li>
        <li>情報収集だけで疲弊していた</li>
      </ul>

      <ul>
        <li>求人情報</li>
        <li>企業の口コミ</li>
        <li>面接対策</li>
        <li>職務経歴書の書き方</li>
        <li>キャリアの選択肢</li>
        <li>市場価値という言葉</li>
        <li>情報が増えるほど不安も増えていった</li>
        <li>エネルギーが少ない状態では、転職活動の情報量が大きな負担だった</li>
      </ul>

      <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        本当の問題は会社だけではなかった
      </h2>

      <ul>
        <li>完璧主義だったこと</li>
      </ul>

      <ul>
        <li>期待に応えたい</li>
        <li>迷惑をかけたくない</li>
        <li>失敗したくない</li>
        <li>中途半端な自分を見せたくない</li>
        <li>環境を変えても、この完璧主義のままだとまた苦しくなるかもしれないと思った</li>
        <li>他人と比較する癖</li>
      </ul>

      <ul>
        <li>同世代の活躍</li>
        <li>同期の成長</li>
        <li>友人の転職や昇進</li>
        <li>SNSで見える誰かの成功</li>
        <li>自分に合っているかより、周りからどう見えるかを気にしていた</li>
        <li>頑張りすぎる働き方</li>
      </ul>

      <ul>
        <li>疲れていても無理をする</li>
        <li>不安があっても一人で抱える</li>
        <li>頼るより先に自分で何とかしようとする</li>
        <li>限界が近づいていても、まだ大丈夫だと思い込む</li>
        <li>必要だったのは「どの会社に行くか」だけでなく、「自分はどう働きたいのか」を考えることだった</li>
        <li>自分に合わない環境で無理をしていた</li>
      </ul>

      <ul>
        <li>スピード感</li>
        <li>期待値</li>
        <li>役割</li>
        <li>人間関係</li>
        <li>評価されるポイント</li>
        <li>求められる姿勢</li>
        <li>自分と環境の相性を見つめる必要があった</li>
      </ul>

      <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        働き方そのものを見直すようになった
      </h2>

      <ul>
        <li>自分が大切にしたい価値観</li>
      </ul>

      <ul>
        <li>どんな仕事なら続けられるのか</li>
        <li>どんな人たちと働きたいのか</li>
        <li>どんなペースなら無理なく力を出せるのか</li>
        <li>何を大切にして働きたいのか</li>
        <li>私にとって大切だったのは、長く無理なく価値を出し続けられること</li>
        <li>業務委託や起業という選択肢</li>
      </ul>

      <ul>
        <li>会社員として転職することだけが選択肢ではない</li>
        <li>業務委託として複数の仕事に関わる</li>
        <li>自分で小さく事業を始める</li>
        <li>得意なことを活かして、誰かの役に立つ</li>
        <li>自分の働き方を自分で設計していく考え方が大切に思えた</li>
        <li>自分らしい働き方を考え始めた</li>
      </ul>

      <ul>
        <li>どこに行くかより、どう働くかを考えるようになった</li>
        <li>何にエネルギーを使いたいのか</li>
        <li>どんな状態なら力を発揮できるのか</li>
        <li>どんな人や事業に関わりたいのか</li>
        <li>どんな生活リズムで働きたいのか</li>
        <li>何を大切にしながら生きていきたいのか</li>
      </ul>

      <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        まとめ
      </h2>

      <ul>
        <li>転職は、人生を変える大きなきっかけになる</li>
        <li>環境を変えることで救われることもある</li>
        <li>でも、焦りだけで動くと、本当に見つめるべき問題を見落としてしまうことがある</li>
        <li>私に必要だったのは、早く次の会社を決めることではなかった</li>
        <li>自分がなぜ苦しくなったのか</li>
        <li>どんな働き方なら続けられるのか</li>
        <li>何を大切にして生きていきたいのか</li>
        <li>転職は人生を変える手段であって、目的ではなかった</li>
      </ul>
    </ArticleLayout>
  );
}
