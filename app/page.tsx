import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I specialize in analyzing and improving business processes through technology. With a keen eye for detail and a passion for problem-solving, I work closely with stakeholders to understand their needs and design efficient, effective solutions. I have experience in evaluating existing systems, gathering requirements, and implementing technology that aligns with business objectives. My goal is to drive operational improvements by leveraging technology, enhancing system functionality, and ensuring seamless integration for optimal performance. I thrive in collaborative environments, always eager to find innovative ways to address challenges and deliver value.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
