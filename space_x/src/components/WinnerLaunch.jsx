import StyledWinnerLaunch from "./StyledWinnerLaunch";

const WinnerLaunch = ({launch, votes}) => {
    return (
        <StyledWinnerLaunch>
            <p id="launchName">Most liked Launch: {launch.name}</p>
            <img src={launch.links.patch.small} alt="" />
            <p id="votesId">Votes: <span>{votes}</span></p>
        </StyledWinnerLaunch>
    );
}
 
export default WinnerLaunch;