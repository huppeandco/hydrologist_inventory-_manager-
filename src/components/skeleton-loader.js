export function LoaderTemplate () {
    return (
        <div className="skeleton-loader">
            <div className="img"></div>
            <div className="title"></div>
            <div className="txt"></div>
        </div>

    )
}

function SkeletonLoader () {
    return (
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
              {Array.from({ length: 10 }, (_, index) => (
                  <LoaderTemplate key={index} />
              ))}
        </div>
    )
}


export default SkeletonLoader;