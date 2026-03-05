import type { RichListItem } from '@/lib/i18n';

type RichListSectionProps = {
  item: RichListItem;
  headingClassName?: string;
};

export default function RichListSection({
  item,
  headingClassName = 'text-2xl font-bold text-white mb-4',
}: RichListSectionProps) {
  return (
    <div>
      <h3 className={headingClassName}>{item.title}</h3>

      {item.paragraphs?.map((paragraph, paragraphIndex) => (
        <p key={`${item.title}-p-${paragraphIndex}`} className="text-gray-300 leading-relaxed mb-3">
          {paragraph}
        </p>
      ))}

      {item.bullets && item.bullets.length > 0 ? (
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {item.bullets.map((bullet, bulletIndex) => (
            <li key={`${item.title}-b-${bulletIndex}`}>
              {bullet.label ? <strong className="text-white">{bullet.label}</strong> : null}{' '}
              {bullet.text}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
