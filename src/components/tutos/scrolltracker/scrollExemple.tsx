'use client'
import {Flex} from '@chakra-ui/react'
import React from 'react'
import {CodeBlock} from '~/components/CodeBlock'

export default function ScrollExemple() {
  return (
    <Flex w={'full'}>
      <CodeBlock
        lineNB={false}
        language={'typescript'}
        code={` 
         <>
        <Flex
          position="relative"
          alignItems="center"
          flexDirection="row"
          w={'100%'}
          maxW={'90vw'}
        >
          <Highlight
            {...defaultProps}
            theme={theme}
            code={formattedCode}
            language={language}
          >
            {({className, style, tokens, getLineProps, getTokenProps}) => (
              <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <Line key={i} {...getLineProps({line, key: i})}>
                    {lineNB ? <LineNo>{i + 1}</LineNo> : ''}
                    <LineContent>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({token, key})} />
                      ))}
                    </LineContent>
                  </Line>
                ))}
              </Pre>
            )}
          </Highlight>
          <Icon
            as={hasCopied ? CheckIcon : CopyIcon}
            position="absolute"
            top={'50%'}
            right={'1rem'}
            transform={'translateY(-50%)'}
            cursor="pointer"
            onClick={handleCopy}
          />
        </Flex>
      </>`}
      />
    </Flex>
  )
}
