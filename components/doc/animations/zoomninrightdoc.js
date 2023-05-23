import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ZoomninrightDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="zoomninright animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-orange-500 text-white border-round m-2 px-5 py-3">
        zoomninright
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div
                        className="zoomninright animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-orange-500 text-white border-round m-2 px-5 py-3"
                    >
                        zoomninright
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
