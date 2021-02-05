import * as B from 'src/components'
import { Input, Button } from 'antd'
import { useController } from './contoller'
import theme from 'src/styles/theme'
import * as S from './style'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

const NewPool = () => {
  const { form, onSubmit } = useController()

  return (
    <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
      <B.BaseForm form={form} onFinish={onSubmit}>
        <B.Box mlr={4} width={990}>
          <Fade bottom distance="20px" delay={50}>
            <B.BaseCard backgroundColor={theme.primaryDark} shadow radius="10px">
              <B.Box p={2}>
                <B.BaseText type="white" size={36} mb={4} block>
                  POOL 만들기
                </B.BaseText>

                <B.Box>
                  <S.StyledFormItem name="name" label="Pool 이름">
                    <Input />
                  </S.StyledFormItem>
                  <S.StyledFormItem name="mode" label="Pool 모드">
                    <S.StyledRadioGroup size="large">
                      <S.StyledRadioButton value="a">조용한 모드</S.StyledRadioButton>
                      <S.StyledRadioButton value="b">자유로운 모드</S.StyledRadioButton>
                    </S.StyledRadioGroup>
                  </S.StyledFormItem>
                  <S.StyledFormItem name="capacity" label="최대 인원">
                    <S.StyledSlider min={0} max={6} />
                  </S.StyledFormItem>
                  <S.StyledFormItem name="keyword" label="키워드">
                    <S.StyledRadioGroup size="large">
                      <S.StyledRadioButton value={1}>영어자격증</S.StyledRadioButton>
                      <S.StyledRadioButton value={2}>디자인/예술</S.StyledRadioButton>
                      <S.StyledRadioButton value={3}>컴퓨터/개발</S.StyledRadioButton>
                      <S.StyledRadioButton value={4}>취미/여가</S.StyledRadioButton>
                      <S.StyledRadioButton value={5}>독서</S.StyledRadioButton>
                    </S.StyledRadioGroup>
                  </S.StyledFormItem>
                </B.Box>
              </B.Box>
            </B.BaseCard>
          </Fade>

          <Fade bottom distance="20px" delay={250}>
            <B.Box mt={4} display="flex" justify="space-between">
              <Link to="/home">
                <Button style={{ height: 50, width: 150, borderRadius: '25px' }}>
                  <B.BaseText bold plr={1}>
                    이전
                  </B.BaseText>
                </Button>
              </Link>

              <Button
                type="primary"
                htmlType="submit"
                style={{ height: 50, width: 150, borderRadius: '25px' }}
              >
                <B.BaseText bold plr={1}>
                  Pool 만들기
                </B.BaseText>
              </Button>
            </B.Box>
          </Fade>
        </B.Box>
      </B.BaseForm>
    </B.BaseTemplate>
  )
}

export default NewPool
