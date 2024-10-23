import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FadeinendDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="fadeinend animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        fadeinend
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div
                        className="fadeinend animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        fadeinend
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
