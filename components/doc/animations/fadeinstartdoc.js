import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FadeinstartDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="fadeinstart animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        fadeinstart
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div
                        className="fadeinstart animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        fadeinstart
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
