import { styled } from 'styled-components';
import { GoHeartFill } from 'react-icons/go';
import { FcEmptyTrash } from 'react-icons/fc';

function TrashMoveZone() {
  return (
    <TrashMoveZoneStyle>
       <div className="moveZone">
        <div>
          <GoHeartFill className="trashItem" />
        </div>
        <div>
          <FcEmptyTrash className="emptyTrash" />
        </div>
      </div>
    </TrashMoveZoneStyle>
  );
}

const TrashMoveZoneStyle = styled.div`
  .moveZone {
    display: flex;
    justify-content: space-between;
    background: #d7e1d9;

    .trashItem {
      padding: 30px 30px 20px 30px;
      width: 70px;
      height: 70px;
      color: #ffbebc;
    }

    .emptyTrash {
      padding: 20px 30px 20px 30px;
      width: 100px;
      height: 100px;
    }
  }
`;

export default TrashMoveZone;