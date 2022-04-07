import React from "react";
import styled from "styled-components";

const TeamMembers = styled.div`
  width: 100%;
  margin-bottom: auto;
  margin-left: 20px;
  margin-right: 20px;
  align-self: center;
  display: flex;
  
`;

const Group4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: ${(props) => props.marginRight};
`;

const MemberDetails4 = styled.div`
  height: 323px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 34px;
  align-items: center;
  align-self: ${(props) => props.alignSelf};
`;

const Group224 = styled.div`
  width: 232px;
  height: 232px;
  position: relative;
`;
const Ellipse74 = styled.img`
  width: 232px;
  height: 232px;
  box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
`;

const P14 = styled.img`
  width: 206px;
  height: 206px;
  position: absolute;
  top: 13px;
  left: 13px;
`;
const Linkedin8 = styled.img`
  width: 19.74px;
  height: 19.74px;
  position: absolute;
  top: 16.92px;
  left: 17.63px;
`;

const Linkedin9 = styled.div`
  backdrop-filter: blur(4px);
  width: 55px;
  height: 55px;
  position: absolute;
  top: 177px;
  left: 164px;
`;

const Oval4 = styled.img`
  width: 55px;
  height: 55px;
  position: absolute;
`;

const Group8 = styled.div`
  align-self: stretch;
  height: 24px;
  position: relative;
  width: ${(props) => props.width};
`;
const MemberName4 = styled.div`
  color: #007ab7;
  text-align: center;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 700;
  letter-spacing: -0.36px;
  line-height: 22.01px;
  position: absolute;
  left: 37px;
`;
const MemberRole4 = styled.div`
  color: #5e5b5b;
  text-align: center;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
  letter-spacing: 0.72px;
  line-height: 20.55px;
  position: absolute;
  top: 35px;
  left: -1px;
`;

const Group6 = styled.div`
  width: 305px;
  margin-right: 84px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const Group7 = styled.div`
  width: 333px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Teams = () => {
    return (
        <TeamMembers>
        <Group4 marginRight={"auto"}>
          <MemberDetails4 alignSelf={"stretch"}>
            <Group224>
              <Ellipse74
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7f3a0af8-7fd4-4c42-b76a-a86a6c5c50ea.svg?alt=media&token=d5d0cf9d-8c1c-4f6a-95c5-8bd382c964fe"
                }
              />
              <P14
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bc21b11b-f799-42e3-bc3c-409bca2b303d.png?alt=media&token=a9a40d38-c2c1-4e24-a637-20e5d3c30a6e"
                }
              />
              <Linkedin9>
                <Oval4
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/38a061b2-6b94-46dc-aa82-780a7f408bd5.svg?alt=media&token=ad61e87c-ec71-47c1-884e-4a577cb9a3d0"
                  }
                />
                <Linkedin8
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/63309f17-215c-4f41-8876-e93b13c4360a.svg?alt=media&token=0d648a92-55ea-4ff7-99f3-74becedac6ac"
                  }
                />
              </Linkedin9>
            </Group224>
            <Group8 width={"277px"}>
              <MemberName4>Joshua Bamishe</MemberName4>
              <MemberRole4>Company Assistant Manager</MemberRole4>
            </Group8>
          </MemberDetails4>
          <MemberDetails4 alignSelf={"stretch"}>
            <Group224>
              <Ellipse74
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7f3a0af8-7fd4-4c42-b76a-a86a6c5c50ea.svg?alt=media&token=d5d0cf9d-8c1c-4f6a-95c5-8bd382c964fe"
                }
              />
              <P14
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bc21b11b-f799-42e3-bc3c-409bca2b303d.png?alt=media&token=a9a40d38-c2c1-4e24-a637-20e5d3c30a6e"
                }
              />
              <Linkedin9>
                <Oval4
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/38a061b2-6b94-46dc-aa82-780a7f408bd5.svg?alt=media&token=ad61e87c-ec71-47c1-884e-4a577cb9a3d0"
                  }
                />
                <Linkedin8
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/63309f17-215c-4f41-8876-e93b13c4360a.svg?alt=media&token=0d648a92-55ea-4ff7-99f3-74becedac6ac"
                  }
                />
              </Linkedin9>
            </Group224>
            <Group8 width={"277px"}>
              <MemberName4>Joshua Bamishe</MemberName4>
              <MemberRole4>Company Assistant Manager</MemberRole4>
            </Group8>
          </MemberDetails4>
        </Group4>
        <Group4 marginRight={"112px"}>
          <MemberDetails4 alignSelf={"stretch"}>
            <Group224>
              <Ellipse74
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7f3a0af8-7fd4-4c42-b76a-a86a6c5c50ea.svg?alt=media&token=d5d0cf9d-8c1c-4f6a-95c5-8bd382c964fe"
                }
              />
              <P14
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bc21b11b-f799-42e3-bc3c-409bca2b303d.png?alt=media&token=a9a40d38-c2c1-4e24-a637-20e5d3c30a6e"
                }
              />
              <Linkedin9>
                <Oval4
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/38a061b2-6b94-46dc-aa82-780a7f408bd5.svg?alt=media&token=ad61e87c-ec71-47c1-884e-4a577cb9a3d0"
                  }
                />
                <Linkedin8
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/63309f17-215c-4f41-8876-e93b13c4360a.svg?alt=media&token=0d648a92-55ea-4ff7-99f3-74becedac6ac"
                  }
                />
              </Linkedin9>
            </Group224>
            <Group8 width={"277px"}>
              <MemberName4>Joshua Bamishe</MemberName4>
              <MemberRole4>Company Assistant Manager</MemberRole4>
            </Group8>
          </MemberDetails4>
          <MemberDetails4 alignSelf={"stretch"}>
            <Group224>
              <Ellipse74
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7f3a0af8-7fd4-4c42-b76a-a86a6c5c50ea.svg?alt=media&token=d5d0cf9d-8c1c-4f6a-95c5-8bd382c964fe"
                }
              />
              <P14
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bc21b11b-f799-42e3-bc3c-409bca2b303d.png?alt=media&token=a9a40d38-c2c1-4e24-a637-20e5d3c30a6e"
                }
              />
              <Linkedin9>
                <Oval4
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/38a061b2-6b94-46dc-aa82-780a7f408bd5.svg?alt=media&token=ad61e87c-ec71-47c1-884e-4a577cb9a3d0"
                  }
                />
                <Linkedin8
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/63309f17-215c-4f41-8876-e93b13c4360a.svg?alt=media&token=0d648a92-55ea-4ff7-99f3-74becedac6ac"
                  }
                />
              </Linkedin9>
            </Group224>
            <Group8 width={"277px"}>
              <MemberName4>Joshua Bamishe</MemberName4>
              <MemberRole4>Company Assistant Manager</MemberRole4>
            </Group8>
          </MemberDetails4>
        </Group4>
        <Group6>
          <MemberDetails4 alignSelf={"flex-end"}>
            <Group224>
              <Ellipse74
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7f3a0af8-7fd4-4c42-b76a-a86a6c5c50ea.svg?alt=media&token=d5d0cf9d-8c1c-4f6a-95c5-8bd382c964fe"
                }
              />
              <P14
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bc21b11b-f799-42e3-bc3c-409bca2b303d.png?alt=media&token=a9a40d38-c2c1-4e24-a637-20e5d3c30a6e"
                }
              />
              <Linkedin9>
                <Oval4
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/38a061b2-6b94-46dc-aa82-780a7f408bd5.svg?alt=media&token=ad61e87c-ec71-47c1-884e-4a577cb9a3d0"
                  }
                />
                <Linkedin8
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/63309f17-215c-4f41-8876-e93b13c4360a.svg?alt=media&token=0d648a92-55ea-4ff7-99f3-74becedac6ac"
                  }
                />
              </Linkedin9>
            </Group224>
            <Group8 width={"277px"}>
              <MemberName4>Joshua Bamishe</MemberName4>
              <MemberRole4>Company Assistant Manager</MemberRole4>
            </Group8>
          </MemberDetails4>
          <MemberDetails4 alignSelf={"stretch"}>
            <Group224>
              <Ellipse74
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7f3a0af8-7fd4-4c42-b76a-a86a6c5c50ea.svg?alt=media&token=d5d0cf9d-8c1c-4f6a-95c5-8bd382c964fe"
                }
              />
              <P14
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bc21b11b-f799-42e3-bc3c-409bca2b303d.png?alt=media&token=a9a40d38-c2c1-4e24-a637-20e5d3c30a6e"
                }
              />
              <Linkedin9>
                <Oval4
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/38a061b2-6b94-46dc-aa82-780a7f408bd5.svg?alt=media&token=ad61e87c-ec71-47c1-884e-4a577cb9a3d0"
                  }
                />
                <Linkedin8
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/63309f17-215c-4f41-8876-e93b13c4360a.svg?alt=media&token=0d648a92-55ea-4ff7-99f3-74becedac6ac"
                  }
                />
              </Linkedin9>
            </Group224>
            <Group8 width={"277px"}>
              <MemberName4>Joshua Bamishe</MemberName4>
              <MemberRole4>Company Assistant Manager</MemberRole4>
            </Group8>
          </MemberDetails4>
        </Group6>
        <Group7>
          <MemberDetails4 alignSelf={"flex-end"}>
            <Group224>
              <Ellipse74
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7f3a0af8-7fd4-4c42-b76a-a86a6c5c50ea.svg?alt=media&token=d5d0cf9d-8c1c-4f6a-95c5-8bd382c964fe"
                }
              />
              <P14
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bc21b11b-f799-42e3-bc3c-409bca2b303d.png?alt=media&token=a9a40d38-c2c1-4e24-a637-20e5d3c30a6e"
                }
              />
              <Linkedin9>
                <Oval4
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/38a061b2-6b94-46dc-aa82-780a7f408bd5.svg?alt=media&token=ad61e87c-ec71-47c1-884e-4a577cb9a3d0"
                  }
                />
                <Linkedin8
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/63309f17-215c-4f41-8876-e93b13c4360a.svg?alt=media&token=0d648a92-55ea-4ff7-99f3-74becedac6ac"
                  }
                />
              </Linkedin9>
            </Group224>
            <Group8 width={"277px"}>
              <MemberName4>Joshua Bamishe</MemberName4>
              <MemberRole4>Company Assistant Manager</MemberRole4>
            </Group8>
          </MemberDetails4>
          <MemberDetails4 alignSelf={"stretch"}>
            <Group224>
              <Ellipse74
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7f3a0af8-7fd4-4c42-b76a-a86a6c5c50ea.svg?alt=media&token=d5d0cf9d-8c1c-4f6a-95c5-8bd382c964fe"
                }
              />
              <P14
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bc21b11b-f799-42e3-bc3c-409bca2b303d.png?alt=media&token=a9a40d38-c2c1-4e24-a637-20e5d3c30a6e"
                }
              />
              <Linkedin9>
                <Oval4
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/38a061b2-6b94-46dc-aa82-780a7f408bd5.svg?alt=media&token=ad61e87c-ec71-47c1-884e-4a577cb9a3d0"
                  }
                />
                <Linkedin8
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/63309f17-215c-4f41-8876-e93b13c4360a.svg?alt=media&token=0d648a92-55ea-4ff7-99f3-74becedac6ac"
                  }
                />
              </Linkedin9>
            </Group224>
            <Group8 width={"277px"}>
              <MemberName4>Joshua Bamishe</MemberName4>
              <MemberRole4>Company Assistant Manager</MemberRole4>
            </Group8>
          </MemberDetails4>
        </Group7>
      </TeamMembers>
    )
}

export default Teams