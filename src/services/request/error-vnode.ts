/**
 *
 * @param msg
 */
export const errorVNode = (msg) => {
  const errFlag = msg.length > 20
  return h(
    'div',
    {
      class: 'text-[#333] flex',
    },
    [
      h(
        'div',
        {
          class: [
            errFlag
              ? 'max-w-[240px] line-clamp-1 text-left mr-2 break-all'
              : 'text-left break-all mr-6',
          ],
        },
        msg
      ),
      errFlag &&
        h(
          'div',
          {
            class: 'flex-1 cursor-pointer mr-6',
            onClick: (e) => {
              const targetDom = e.target.parentNode.children[0] as HTMLElement
              targetDom.className = 'max-w-[260px] text-left break-all mr-6'
              e.target.remove()
            },
          },
          '更多'
        ),
    ]
  )
}
