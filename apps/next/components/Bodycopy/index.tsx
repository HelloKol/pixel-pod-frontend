// @ts-nocheck
// @ts-ignore
import { PortableTextBlock } from '@portabletext/types';
import { PortableText } from '@portabletext/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyCode } from '@/components';

const Code = ({ value }: any) => {
  if (!value || !value.code) {
    return null;
  }
  const { language, code } = value;
  return (
    <div className="relative group">
      <SyntaxHighlighter
        language={language || 'text'}
        style={nightOwl}
        customStyle={{
          background: '#1C1E20',
          borderRadius: `10px`,
          padding: `20px`
        }}
      >
        {code}
      </SyntaxHighlighter>

      <div className="absolute top-[20px] right-[20px]">
        <CopyCode code={code} />
      </div>
    </div>
  );
};

const serializers = {
  types: {
    code: Code
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 my-4 italic text-gray-700 border-gray-300">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => <ul className="list-disc ml-8 my-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal ml-8 my-4">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    p: ({ children }) => <p className="text-xl my-4">{children}</p>,
    normal: ({ children }) => <p className="text-xl my-4">{children}</p>
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-8 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-8 my-4">{children}</ol>
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>
  }
};

export default async function Bodycopy({ value }: { value: PortableTextBlock }) {
  return <PortableText value={value} components={serializers} />;
}
